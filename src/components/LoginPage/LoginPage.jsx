import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function LoginPage() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (form) => {
    console.log('Form Data --- ', form, "\n", errors);
    console.log('Form Data1 --- ', formState);
  }


  return (
    <div className="grid-container">
      <div className="grid grid-left-panel">
        <div className="portfolio-icon">
          <Box
            sx={{
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // Semi-transparent black background (0.2 opacity)
              backgroundColor: "rgba(255, 255, 255, 0.49)",
              borderRadius: "8px", // Optional: rounded corners
            }}
          >
            <BusinessCenterIcon
              fontSize="large"
              sx={{
                fill: "white",
                width: "2em",
              }}
            />
          </Box>
          <h1>Portfolio</h1>
        </div>

        <div className="about-portfolio">
          <h1>
            Welcome to your <br />
            creative space
          </h1>
          <p>
            Manage your projects, showcase your work, and connect with
            opportunities.
          </p>
        </div>

        <div className="footer-portfolio">
          <a href="#">Privacy policy</a>

          <a href="#">Terms of service</a>

          <a href="#">Help center</a>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-right-panel">
          <div className="login-panel">
            <div className="login-header">
              <div className="login-icon">
                <LoginIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Sign In</Typography>
              </div>
              <div className="enter-cred-text">
                Enter your credentials to access your account
              </div>
            </div>
            <div className="login-body">
              <div className="login-email">
                <Typography
                  variant="body1"
                  fontWeight="700"
                  fontSize={"0.875rem"}
                >
                  Email Address
                </Typography>
                <TextField
                  size="small"
                  type="text"
                  id="email"
                  placeholder="you@example.com"
                  error={errors.email?.type === 'pattern'}
                  // backgroundColor="#f5f5f5"
                  {...register("email", { pattern: {
                    value: /[a-zA-Z]/g,
                    message: ":asdfahsjdgbakjshdjakshdjkashdjkahds"
                  } }) }
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      opacity: 0.5,
                      fontSize: "16px",
                    },
                    "& .MuiInputBase-adornedStart": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment>
                          <EmailIcon sx={{ mr: 1 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  onChange={e => {
                    console.log('Val -- ', e);
                    console.log('Val -- ', errors);
                  }}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="login-password">
                <Typography
                  variant="body1"
                  fontWeight="700"
                  fontSize={"0.875rem"}
                >
                  Password
                </Typography>
                <TextField
                  size="small"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  error={errors.password?.type === 'pattern'}
                  // backgroundColor="#f5f5f5"
                  {...register("password", { pattern: {
                    value: /[a-zA-Z]/g,
                    message: ":asdfahsjdgbakjshdjakshdjkashdjkahds"
                  } }) }
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      opacity: 0.5, // Ensure full visibility if needed
                    },
                    "& .MuiInputBase-adornedStart": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment>
                          <LockIcon sx={{ mr: 1 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                ></TextField>
              </div>
              <div className="login-signin-checkbox">
                <input
                  type="checkbox"
                  id="signIn"
                  name="signIn"
                  value="signIn"
                ></input>
                <label htmlFor="signIn">Keep me signed in</label>
              </div>
              <div className="login-signin-button">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "black",
                    width: "100%",
                  }}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <DevTool control={control}/>
    </div>
  );
}
