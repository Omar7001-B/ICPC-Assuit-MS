const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      // We need to check that the current user is allowed to access this route or not
      console.log("current user role" , req.currentuser.role);
      console.log("allowed roles , " , roles);
      if (!roles.includes(req.currentuser.role)) {
        return res.status(403).json({ message: "You are not allowed to do this" });
      }
      next();
    };
  };
  
  export default authorizeRoles;
  