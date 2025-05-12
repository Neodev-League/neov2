import { useState, useEffect } from "react";
import { CircleCheck, LogIn } from "lucide-react";
import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import { fetchIDFromProfiles } from "../../supabase/supabaseFetch";
// // import neoGif from "../assets/gif/black.gif";

export default function Login() {
  const [pageState, setPageState] = useState("Login");
  const [loading, setLoading] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp, signInWithPassword, signInWithIdToken, supabase } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (window as any).handleSignInWithGoogle = async (response: any) => {
      const { data, error } = await signInWithIdToken({
        provider: "google",
        token: response.credential,
      });
      console.log("google data:", data);

      const existingUserData = await fetchIDFromProfiles();
      if (!existingUserData) {
        try {
          const {
            data: { user },
          } = await supabase.auth.getUser();
          if (!user || !user.id) {
            throw new Error("incorrect information in google signin");
          }

          console.log("User ID for google insert:", user?.id);

          if (user) {
            const { error } = await supabase.from("profiles").insert({
              id: user.id,
              name: user.user_metadata?.full_name || user.email!.split("@")[0],
              email: user.email,
            });
            console.log(
              "inserted:",
              user.id,
              user.user_metadata?.full_name,
              user.email
            );

            if (error) {
              console.log("error in inserting google", error);
            }
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        console.log("google user info already inserted into profiles table");
      }

      navigate("/dashboard");

      if (error) {
        throw error;
      }
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      console.log("Google Identity Services script loaded");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete (window as any).handleSignInWithGoogle;
    };
  }, [signInWithIdToken, navigate, supabase]);

  const loginDialogs = [
    "login",
    "logging in...",
    <p className="gradient flex items-center gap-2 justify-center">
      <CircleCheck /> one second...
    </p>,
    "login failed. do you have an account?",
  ];

  const signupDialogs = [
    "sign up",
    "creating account...",
    <p className="gradient flex items-center gap-2 justify-center">
      <CircleCheck /> account created.
    </p>,
    "something went wrong. try again",
  ];

  const createNewUser = async (email: string, password: string) => {
    try {
      setLoading(1);
      const { data, error } = await signUp({
        email: email,
        password: password,
      });
      console.log("data", data);
      if (error) {
        throw error;
      }

      insertSignupToProfileTable();

      setLoading(2);
    } catch (e: any) {
      alert(e.error_description || e.message);
      console.error("error in signin", e);
      setLoading(3);
    }
  };

  // on sign in, insert name (FOR NOW) along with the user.id
  const insertSignupToProfileTable = async () => {
    try {
      // Fetch user and insert data
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("User ID for regular signup insert:", user?.id);

      if (user) {
        const { error } = await supabase
          .from("profiles")
          .insert({ id: user.id, name: name, email: user.email });
        console.log("success:", user);

        if (error) {
          console.log(error);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const signInProcess = async (email: string, password: string) => {
    try {
      setLoading(1);
      const { data, error } = await signInWithPassword({
        email: email,
        password: password,
      });
      console.log("data", data);
      if (error) {
        throw error;
      }
      setLoading(2);

      console.log("redirecting to neo dash");
      navigate("/dashboard");
    } catch (e: any) {
      alert(e.error_description || e.message);
      console.error("error in signup", e);
      setLoading(3);

      setTimeout(() => {
        setLoading(0);
      }, 2000);
    }
  };

  const handleSignupPage = () => {
    setLoading(0);
    setTimeout(() => {
      setPageState("Signup");
    }, 250);
  };

  const handleLoginPage = () => {
    setLoading(0);
    setTimeout(() => {
      setPageState("Login");
    }, 250);
  };

  const handleSubmit = async (email: string, password: string) => {
    if (pageState === "Login") {
      await signInProcess(email, password);
    } else {
      await createNewUser(email, password);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="h-screen w-screen bg-linear-to-b from-[#C4EDE0] via-[#D1FAE5] to-white font-manrope">
        <button className="relative group mt-5 ml-5 shadow-green-300 shadow-md hover:shadow-lg">
          <div className="relative px-8 py-3 bg-neo-green-1/50 text-white rounded-sm font-semibold transition-all duration-300 group-hover:bg-neo-green-4">
            <span className="relative z-10">home.</span>
          </div>
        </button>
        <div className="flex justify-center w-full h-full mt-10">
          <div className="bg-linear-to-b from-white/50 via-[#ccede3]/50 to-[#d8f2ea]/50 h-[70%] w-2/3 rounded-lg shadow-neo-green-4/20  shadow-[10px_0_10px_-5px_rgba(0,0,0,0.5),-10px_0_10px_-5px_rgba(0,0,0,0.5)] backdrop-blur-lg">
            <div className="flex font-extrabold md:font-bold text-4xl sm:text-4xl md:text-5xl text-[#065f46] leading-tight text-center md:text-left pl-5 shadow-neo-green-2/90 shadow-sm">
              <span className="pt-3 relative inline-block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-neo-green-2 via-neo-green-1 to-neo-green-5 bg-size-200 animate-gradient-x-slow">
                  {pageState == "Login" ? "sign in" : "sign up"}
                </span>
                <span className="text-base pl-5 text-neo-green-1">
                  {pageState == "Login"
                    ? "to the neo developer league dashboard"
                    : "for the neo developer league dashboard"}
                </span>
                <span className="absolute -inset-1 border border-[#34D399]/10 rounded-xl blur-xs" />
              </span>

              {/* spinning neo logo */}
              {/* <div className="flex justify-end w-[50%] py-1">
                <img
                  src={neoGif}
                  alt="rotating neo logo"
                  className=" w-[30%]"
                />
              </div> */}
            </div>

            {/* google one tap */}
            {/* {pageState=="Login" ? } */}
            <div
              id="google-auth"
              className="w-full h-10 flex items-center justify-center mt-10"
            >
              <div
                id="g_id_onload"
                data-client_id="629898723447-991jeph8ejoshpajqlkp2geua48ckmm8.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="handleSignInWithGoogle"
                data-itp_support="true"
                data-use_fedcm_for_prompt="true"
              ></div>

              <div
                className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="continue_with"
                data-size="large"
                data-logo_alignment="left"
              ></div>
            </div>
            <div className="w-full flex justify-center">
              <div className="h-1 bg-neo-green-1/10 mt-5 w-[70%] rounded-lg" />
            </div>

            <form
              id="form"
              className={`my-1 h-full flex items-center flex-col ${
                pageState == "Signup" ? "pt-0" : "pt-5"
              }`}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(email, password);
              }}
            >
              <div className="flex flex-col py-2 md:w-[60%] w-80% justify-center items-center">
                {pageState == "Signup" ? (
                  <>
                    <h4 className="w-full flex flex-start py-2 text-neo-green-1 font-bold">
                      name
                    </h4>
                    <input
                      type="text"
                      id="name"
                      className="md:p-5 p-2 w-full h-12 placeholder-black/40 text-black/80 border border-neo-green-1 shadow-button-green transition duration-300 ease-in focus:outline-none bg-white/20 focus:bg-green-2"
                      placeholder="Matthew Singer"
                      value={name}
                      onChange={(e: any) => setName(e.target.value)}
                      required
                      autoComplete="name"
                    />
                  </>
                ) : (
                  ""
                )}
                <h4 className="w-full flex flex-start py-2 text-neo-green-1 font-bold">
                  email
                </h4>
                <input
                  type="email"
                  id="email"
                  className="md:p-5 p-2 w-full h-12 placeholder-black/40 text-black/80 border border-neo-green-1 shadow-button-green transition duration-300 ease-in focus:outline-none bg-white/20 focus:bg-green-2"
                  placeholder="@ email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                <h4 className="w-full flex flex-start py-2 text-neo-green-1 font-bold">
                  password
                </h4>
                <input
                  type="password"
                  id="password"
                  className="md:p-5 mt-1 p-2 w-full h-12 placeholder-black/40 text-black/80 border border-neo-green-1 shadow-button-green transition duration-300 ease-in focus:outline-none bg-white/20 focus:neo-green-2"
                  placeholder="*** password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>

              <div
                className={`flex h-15 ${
                  pageState == "Login" ? "mt-10" : "md:mt-3 mt-5"
                }`}
              >
                {/* submit button */}
                <button
                  id="submit"
                  className={`border border-neo-green-1 shadow-button-green bg-white/10 transition duration-300 ease-in px-10 py-2 flex items-center rounded-sm shadow-md shadow-neo-green-1/40  hover:bg-neo-green-2 ${
                    loading == 2 ? "pointer-events-none" : ""
                  }`}
                  disabled={loading === 1}
                  type="submit"
                >
                  <span className="p-1 gradient2 whitespace-pre-wrap text-center text-md text-neo-green-1 font-medium leading-none tracking-tight">
                    {pageState == "Login"
                      ? loginDialogs[loading]
                      : signupDialogs[loading]}
                  </span>
                  {loading == 0 ? <LogIn style={{ color: "#34D399" }} /> : ""}
                </button>

                {/* account created badge */}
                {loading == 2 && pageState == "Signup" ? (
                  <div className="w-auto px-6 bg-white/10 border border-neo-green-1 rounded-sm shadow-md shadow-neo-green-1/40 flex justify-center items-center ml-5">
                    <h4 className="text-neo-green-1 px-3 py-2">
                      great! check your email to verify and then{" "}
                      <button
                        className="underline ml-0.5 cursor-pointer"
                        onClick={() => handleLoginPage()}
                      >
                        sign in
                      </button>
                      {/* great! check your email to verify your account. */}
                    </h4>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* switch page state button */}
              <div
                id="page-state"
                className={`w-full h-full flex items-start justify-center ${
                  pageState == "Signup" ? "pt-15" : "pt-25"
                }`}
              >
                <button
                  className="overline text-neo-green-1 mb-20 hover:text-neo-green-5"
                  onClick={(e) => {
                    e.preventDefault();
                    if (pageState === "Login") {
                      handleSignupPage();
                    } else {
                      handleLoginPage();
                    }
                  }}
                >
                  {pageState == "Login"
                    ? "no account? sign up"
                    : "have account? sign in"}
                </button>
              </div>
            </form>

            <div id="beam" className="w-full">
              {/* animated beams on top/bottom of container */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r border-neo-green-1 from-neo-green-2 to-transparent h-[20px] w-full animate-glow blur-sm" />
              {/* <div className="absolute inset-x-0 top-0 bg-gradient-to-l border-neo-green-1 from-white to-transparent h-[20px] w-full animate-glow blur-sm" /> */}

              {/* gradient beam on bottom of container*/}
              <div className="absolute inset-x-40 bottom-0 bg-gradient-to-r from-transparent via-neo-green-2 to-transparent h-[2px] w-3/4 blur-sm border-neo-green-1" />
              <div className="absolute inset-x-40 bottom-0 bg-gradient-to-r from-transparent via-neo-green-5 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-80 bottom-0 bg-gradient-to-r from-transparent via-neo-green-2 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-80 bottom-0 bg-gradient-to-r from-transparent via-neo-green-2 to-transparent h-px w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
