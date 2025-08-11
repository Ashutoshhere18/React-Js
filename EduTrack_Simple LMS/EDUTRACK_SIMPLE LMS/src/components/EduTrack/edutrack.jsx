import React, { useState } from "react";
import "./edutrack.css";

const EduTrack = () => {
  const [courses, setCourses] = useState([
    { title: "React JS Fundamentals", duration: "6 Weeks", instructor: "John Smith" },
    { title: "Introduction to Python", duration: "4 Weeks", instructor: "Sarah Johnson" },
    { title: "Web Development Bootcamp", duration: "8 Weeks", instructor: "David Lee" },
  ]);

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [instructor, setInstructor] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add course
  const handleAdd = () => {
    if (!title || !duration || !instructor) return alert("Please fill all fields");
    setCourses([...courses, { title, duration, instructor }]);
    setTitle("");
    setDuration("");
    setInstructor("");
  };

  // Delete course
  const handleDelete = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  // Edit course (prefill form)
  const handleEdit = (index) => {
    setEditIndex(index);
    setTitle(courses[index].title);
    setDuration(courses[index].duration);
    setInstructor(courses[index].instructor);
  };

  // Update course
  const handleUpdate = () => {
    if (!title || !duration || !instructor) return alert("Please fill all fields");
    const updatedCourses = [...courses];
    updatedCourses[editIndex] = { title, duration, instructor };
    setCourses(updatedCourses);
    setTitle("");
    setDuration("");
    setInstructor("");
    setEditIndex(null);
  };

  return (
    <div className="container">
      <h1>EduTrack - Course Manager</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        />
        {editIndex === null ? (
          <button onClick={handleAdd}>Add Course</button>
        ) : (
          <button onClick={handleUpdate}>Update Course</button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
            <th>Instructor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>{course.instructor}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EduTrack;
