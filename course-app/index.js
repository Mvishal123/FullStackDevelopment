const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

// datas
let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretAdmin = "adminS3cr3t";
const secretUser = "userS3cr3t";

// create token for admin
const createTokenAdmin = (details) => {
  const token = jwt.sign(details, secretAdmin, { expiresIn: "1h" });
  return token;
};

// create token for user
const createTokenUser = (details) => {
  const token = jwt.sign(details, secretUser, { expiresIn: "1h" });
  return token;
};

const adminTokenAuthentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, secretAdmin, (err, data) => {
    if (err) {
      res.send("Unauthorized access");
    } else {
      const { username, password } = data;
      const admin = ADMINS.find(
        (a) => a.username === username && a.password === Number(password)
      );
      req.admin = admin;
      console.log("admin:", req.admin);
      next();
    }
  });
};
const userTokenAuthentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, secretUser, (err, data) => {
    if (err) {
      res.send("Unauthorized access");
    } else {
      const { username, password } = data;
      const user = USERS.find(
        (u) => u.username === username && u.password === Number(password)
      );
      req.user = user;
      next();
    }
  });
};

// Admin routes
app.post("/admin/signup", (req, res) => {
  const adminDetails = req.body;
  const adminPresent = ADMINS.find((a) => a.username === adminDetails.username);
  if (!adminPresent) {
    ADMINS.push({ ...adminDetails, id: ADMINS.length + 1 });
    const token = createTokenAdmin(adminDetails);
    res.json({ msg: "admin created successfully", token });
  } else {
    res.status(411).send("Admin already present");
  }
});

app.post("/admin/login", (req, res) => {
  const { username, password } = req.headers;
  const adminPresent = ADMINS.find(
    (a) => a.username === username && a.password === Number(password)
  );
  if (adminPresent) {
    const token = createTokenAdmin(adminPresent);
    res.json({ msg: "Logged in successfully", token });
  } else {
    res.status(411).json({ msg: "You need to sign up first" });
  }
});

app.post("/admin/courses", adminTokenAuthentication, (req, res) => {
  const course = req.body;
  id = COURSES.length + 1;
  COURSES.push({ ...course, id });
  res.json({ msg: "Course created succesfully", id });
});

app.put("/admin/courses/:courseId", adminTokenAuthentication, (req, res) => {
  const course = COURSES.find((c) => c.id === Number(req.params.courseId));
  if (course) {
    const updatedCourse = req.body;
    Object.assign(course, updatedCourse);
    res.json({ msg: "Course updated successfully", id: course.id });
  } else {
    res.status(411).send("Course not found");
  }
});

app.get("/admin/courses", adminTokenAuthentication, (req, res) => {
  const allCourses = COURSES.filter((c) => c.published === true);
  res.send(allCourses);
});

// User routes
app.post("/users/signup", (req, res) => {
  const userDetails = req.body;
  const user = USERS.find((u) => u.username === userDetails.username);
  if (user) {
    res.status(400).json({ msg: "Username already taken" });
  } else {
    USERS.push({ ...userDetails, id: USERS.length + 1 });
    const token = createTokenUser(userDetails);
    res.json({ msg: "User created successfully", token });
  }
});

app.post("/users/login", (req, res) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === Number(password)
  );
  if (user) {
    const token = createTokenUser(user);
    res.json({ msg: "Logged in successfully", token });
  } else {
    res.json({ msg: "Incorrect credentials" });
  }
});

app.get("/users/courses", userTokenAuthentication, (req, res) => {
  const allCourses = COURSES.filter((c) => c.published === true);
  res.json(allCourses);
});

app.post("/users/courses/:courseId", userTokenAuthentication, (req, res) => {
  const id = Number(req.params.courseId);
  const courseToPurchase = COURSES.find((c) => c.id === id);
  if (courseToPurchase) {
    const user = req.user;
    if (!user.hasOwnProperty("purchasedCourses")) {
      user.purchasedCourses = [];
    }
    user.purchasedCourses.push(id);
    res.json({ msg: "Course purchased successfully", user: user });
  } else {
    res.status(411).send({ msg: "Course not found" });
  }
});

app.get("/users/purchasedCourses", userTokenAuthentication, (req, res) => {
  const purchasedCourses = COURSES.filter(c => req.user.purchasedCourses.includes(c.id));
      res.json({PurchasedCourses: purchasedCourses});
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
