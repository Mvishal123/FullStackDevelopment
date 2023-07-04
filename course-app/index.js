const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
let ADMINS = [];
let USERS = [];
let COURSES = [];

let adminId = 0;
let userId = 0;
let courseId = 0;

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const userPresent = ADMINS.find(
    (a) => a.username === username && a.password == password
  );
  if (userPresent) {
    next();
  } else {
    res.status(404).send("Unauthorized access");
  }
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const userPresent = USERS.find(
    (a) => a.username === username && a.password == password
  );
  if (userPresent) {
    next();
  } else {
    res.status(404).send("Unauthorized access");
  }
};

// Admin routes
app.post("/admin/signup", (req, res) => {
  const { username, password } = req.body;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (!admin) {
    const adminDetails = {
      username: username,
      password: password,
      id: adminId
    };
    adminId++;
    ADMINS.push(adminDetails);
    res.send("Admin joined succesfully");
  } else {
    res.status(411).send("Admin already present");
  }
});

app.post("/admin/login", (req, res) => {
  const { username, password } = req.headers;
  const adminPresent = ADMINS.find(
    (a) => a.username === username && a.password == password
  );
  if (adminPresent) {
    res.send({ msg: "Succesfully logged in" });
  } else {
    res.status(411).send({ msf: "Admin not found. Sign up first" });
  }
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  const course = req.body;
  course.id = courseId;
  courseId++;
  COURSES.push(course);
  res.send({ msg: "course added successfully" });
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  const delId = Number(req.params.courseId);
  const course = COURSES.find((c) => (c.id = delId));
  if (course) {
    Object.assign(course, req.body);
    res.send({ msg: "updated succesfully", course: course });
  } else {
    res.status(404).send({ msg: "course not found" });
  }
});

app.get("/admin/courses", adminAuthentication, (req, res) => {
  if (COURSES.length === 0) {
    res.send({ msg: "Course list is empty" });
  } else {
    res.send({ courses: COURSES });
  }
});

// User routes
app.post("/users/signup", (req, res) => {
  const user = req.body;
  const userPresent = USERS.find(
    (u) => u.username === user.username && u.password == user.password
  );
  if (!userPresent) {
    user.id = userId;
    user.coursePurchased = [];
    USERS.push(user);
    userId++;
    res.send({ msg: "user created successfully" });
  } else {
    res.status(404).send({ msg: "User already present" });
  }
});

app.post("/users/login", (req, res) => {
  const { username, password } = req.headers;
  const userPresent = USERS.find(
    (u) => u.username === username && u.password == password
  );
  if (userPresent) {
    res.send({ msg: "Logged in succesfully" });
  } else {
    res.status(404).send({ msg: "user not found. Try signing in first" });
  }
});

app.get("/users/courses", userAuthentication, (req, res) => {
  res.send(COURSES);
});

app.put("/users/courses/:courseId", userAuthentication, (req, res) => {
  const courseId = req.params.courseId;
  const findCourse = COURSES.find((c) => c.id == courseId);
  if (findCourse) {
    const { username, password } = req.headers;
    const user = USERS.find(
      (u) => u.username === username && u.password == password
    );
    const details = { courseId: courseId, purchased: true };
    // user.coursePurchased.push(details);
    user.coursePurchased.push(details);
    console.log(user);
    res.send({msg: "Course purchased successfully"});
  } else{
    res.status(404).send("Course not found");
  }
});

app.get("/users/purchasedCourses",userAuthentication, (req, res) => {
  const {username, password} = req.headers;
  const findUser = USERS.find(u => u.username == username && u.password == password);
  console.log("finduser:", findUser);
  const user = USERS[findUser.id];
  console.log("USER: ",user);
  let purchasedCoursesId = [];
  for(let courses of user.coursePurchased){
    purchasedCoursesId.push(courses.courseId);
  }
  console.log("purchased courses id:", purchasedCoursesId);
  let coursePurchased = [];
  for(let courseId of purchasedCoursesId){
    const findCourse = COURSES.find(c => c.id == courseId);
    console.log("findCourse:", findCourse);
    coursePurchased.push(findCourse);
  }
  console.log(coursePurchased);
  res.send({courses: coursePurchased});
});

app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
