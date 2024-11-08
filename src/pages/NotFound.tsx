import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        bgcolor: "#F3FAF8",  
        padding: 4,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "72px", fontWeight: "bold", color: "#2A5B55" }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ mb: 2, color: "#9EA0A0" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#595E57" }}>
        It seems you’ve hit a broken link or entered the URL incorrectly. Please check the address or return to the home page.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          bgcolor: "#32736A",
          color: "#fff",
          ":hover": { bgcolor: "#2A5B55" },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
