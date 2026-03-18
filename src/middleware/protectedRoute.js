import jwt from 'jsonwebtoken';

export const protect = (roles = []) => async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No Token Provided' });
    }

    const token = authHeader.replace('Bearer ', '');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    req.user = decoded;

    // 🔐 Role check
    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ message: 'Access Denied' });
    }

    next();

  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

