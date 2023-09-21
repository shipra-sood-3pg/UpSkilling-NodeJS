const dbHelper = require('../dbhelper');

module.exports.getAllCourses = async() => {
    const [records] = await dbHelper.query('SELECT * FROM course');
    return records;
}

module.exports.getCourseById = async(id) => {
    const [[record]] = await dbHelper.query('SELECT * FROM course WHERE Id = ?', [id]);
    return record;
}

module.exports.deleteCourse = async(id) => {
    const [{affectedRows}] = await dbHelper.query('DELETE FROM course WHERE Id = ?', [id]);
    return affectedRows;
}

module.exports.addCourse = async(objCourse, id = 0) => {
    const [{affectedRows}] = await dbHelper.query('INSERT INTO course (CourseCode, CourseName, Credits, Duration, CourseFee, Complexity) VALUES (?,?,?,?,?,?);', 
                            [objCourse.courseCode, objOrder.courseName, objOrder.credits, objOrder.duration, objOrder.CourseFee, objOrder.compexity]);
    return affectedRows;
}

module.exports.editCourse = async(objCourse, id) => {
    const [data] = await dbHelper.query('UPDATE course SET CourseCode = ? , CourseName = ?, Credits = ?, Duration = ?, CourseFee = ?, Complexity = ?  WHERE Id = ?;', 
                            [objCourse.courseCode, objOrder.courseName, objOrder.credits, objOrder.duration, objOrder.CourseFee, objOrder.compexity, id]);
    return data;
}