import { forwardRef, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { snackBarAction } from "../../redux/slice";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const snackBar = useSelector((state) => state.snackBar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      snackBarAction({
        severity: "",
        message: "",
      })
    );
  };

  return (
    snackBar?.severity && (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={true}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={snackBar.severity}
            // sx={{ width: "100%", color: "#fff", background: "#385B7A" }}
          >
            {snackBar.message}
          </Alert>
        </Snackbar>
      </Stack>
    )
  );
};
