import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";

import initializeFirebaseApp from "../firebase/Firebase.init"
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../redux/slices/auth";
import { clearMessage } from "../redux/slices/message";
import { useDispatch } from "react-redux";


// inititalize firebase app 
initializeFirebaseApp()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    // const [admin, setAdmin] = useState(false)
    // const [isAdmin, setIsAdmin] = useState(false)
    // const [token, setToken] = useState('')

    const navigate = useNavigate()

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const dispatch = useDispatch()
    //  Create New User with email & Password
    // const registerUser = (email, password, name, history) => {
    //     setIsLoading(true)
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(() => {
    //             setAuthError('')
    //             const newUser = { email, displayName: name }
    //             setUser(newUser)

    //             // save user to the database
    //             saveUser(email, name, 'post')

    //             // send name to firebase after creation
    //             updateProfile(auth.currentUser, {
    //                 displayName: name
    //             }).then(() => {

    //             }).catch((error) => {

    //             });
    //             history.push('/')

    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: 'Successfully Created an Account!',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             })
    //         })
    //         .catch((error) => {
    //             setAuthError(error.message)
    //         })
    //         .finally(() => setIsLoading(false))
    // }

    // login User Wih email & password
    // const loginUser = (email, password, location, history) => {
    //     setIsLoading(true)
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(() => {
    //             const destination = location?.state?.from || '/'
    //             history.replace(destination)
    //             setAuthError('')
    //         })
    //         .catch((error) => {
    //             setAuthError(error.message)
    //         })
    //         .finally(() => setIsLoading(false))
    // }


    // Google pop Up sign 
    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(({ user }) => {
                setUser(user)
                // const destination = location?.state?.from || '/'
                // history.replace(destination)
                // save user to the database
                // saveUser(user.email, user.displayName, user.accessToken, user?.photoURL)
                setAuthError('')
                if (user.accessToken) {
                    dispatch(clearMessage());
                    dispatch(googleLogin({ name: user?.displayName, email: user?.email, access_token: user?.accessToken, imageurl: user?.photoURL }))
                        .then((res) => {
                            if (res?.payload?.token) {
                                navigate("/profile");
                                window.location.reload()
                            }
                        })
                        .catch(() => {

                        });
                }

            }).catch((error) => {
                console.log("authentication error ->", error);
                setAuthError(error.message)

            }).finally(() => setIsLoading(false))
    }



    // Facebook pop Up sign 


    const signInWithFacebook = () => {
        setIsLoading(true)
        signInWithPopup(auth, facebookProvider)
            .then(({ user }) => {
                setUser(user)
                // const destination = location?.state?.from || '/'
                // history.replace(destination)
                // save user to the database
                // saveUser(user.email, user.displayName, user.accessToken, user?.photoURL)
                setAuthError('')
                if (user.accessToken) {
                    navigate("/profile", { replace: true })
                    window.location.reload()
                }
            }).catch((error) => {
                console.log("authentication error ->", error);
                setAuthError(error.message)

            }).finally(() => setIsLoading(false))
    }


    // observer user state change 
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user)
    //             getIdToken(user)
    //                 .then(idToken => {
    //                     setToken(idToken);
    //                 })
    //         } else {
    //             setUser({})
    //         }
    //         setIsLoading(false)
    //     });
    //     return () => unsubscribe;
    // }, [auth])


    // check admin or normal user 
    // useEffect(() => {
    //     setIsAdmin(true)
    //     const url = `https://boiling-temple-62751.herokuapp.com/users/${user?.email}`
    //     axios.get(url)
    //         .then(res => {
    //             if (res.data.admin) {
    //                 setAdmin(res.data.admin)
    //                 setIsAdmin(false)
    //             }
    //         })

    // }, [user?.email])

    // const logout = () => {
    //     setIsLoading(true)
    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //     }).catch((error) => {
    //         // An error happened.
    //     }).finally(() => setIsLoading(false))
    // }


    // save user information into our database
    // const saveUser = (email, displayName, accessToken, photoURL) => {
    //     const user = { email, name: displayName, token: accessToken, photoURL }

    //     httpReq.post('createGoogleUser', user)
    //         .then((res) => {
    //             if (res.data.insertedId) {

    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: 'Successfully Created an Account!',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })


    // }





    return {
        user,
        // admin,
        // isAdmin,
        // token,
        // registerUser,
        // loginUser,
        // logout,
        signInWithGoogle,
        signInWithFacebook,
        isLoading,
        authError,
        error,
        setError
    }

}
export default useFirebase