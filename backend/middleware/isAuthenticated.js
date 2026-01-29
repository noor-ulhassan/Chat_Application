const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode)
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    req.id = decode.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default isAuthenticated;
