const express = require('express'),
router = express.Router();

const service = require('../services/CourseService');
import Course from '../models/course';

//Route: http://localhost:3000/api/course
router.get('/', async (request, response) => {
    let orders = await service.getAllCourses();
    response.send(orders);
});

//Route: http://localhost:3000/api/course/{id}
router.get('/:id', async (request, response) => {
    let order = await service.getCourseById(request.params.id);

    if(order == undefined){
        response.status(404).json('no record with given id : ' + request.params.id);
    }
    else {
        response.send(order);
    }
});

//Route: http://localhost:3000/api/course/{id}
router.delete('/:id', async (request, response) => {
    let affectedRows = await service.deleteCourse(request.params.id);

    if(affectedRows == 0){
        response.status(404).json('no record with given id : ' + request.params.id);
    }
    else {
        response.send('deleted successfully');
    }
});

//Route: http://localhost:3000/api/course/
router.post('/', async (request, response) => {
    const newCourse = new Course({
        courseCode: request.body.courseCode,
        courseName: request.body.courseName,
        credits: request.body.credits,
        duration: request.body.duration,
        fee: request.body.fee,
        credits: request.body.credits
    });

    let affectedRows = await service.addCourse(newCourse);
    if(affectedRows == 0){
        response.status(404).json('unable to insert record into the database' );
    }
    else {
        response.status(201).send('record inserted successfully');
    }
});

//Route: http://localhost:3000/api/orders/{id}
router.put('/:id', async (request, response) => {
    const updatedCourse = new Course({
        id: request.body.id,
        courseCode: request.body.courseCode,
        courseName: request.body.courseName,
        credits: request.body.credits,
        duration: request.body.duration,
        fee: request.body.fee,
        credits: request.body.credits
    });
    let data = await service.editCourse(updatedCourse, request.params.id);
    response.send(data);    
});

module.exports = router;