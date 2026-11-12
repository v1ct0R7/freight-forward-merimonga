import jwt from "jsonwebtoken";

const workerAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Not authorized" });
    }

    const decoded = jwt.verify(token, process.env.WORKER_JWT_SECRET);
    if (decoded.role !== "worker") {
      return res.json({ success: false, message: "Not authorized" });
    }

    req.body.workerId = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not authorized" });
  }
};

export default workerAuth;