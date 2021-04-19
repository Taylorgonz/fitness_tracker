const router = require('express').Router();
const db = require("../models");
const path = require("path");

router.get("/workouts", async (req, res) => {
    try {
        const workoutData = await db.Workout.aggregate([
            {$set: {
                totalduration: {$sum: "$exercises.duration"}
            }},
        ])
        res.status(200).json(workoutData);
    }   catch (err) {
        res.status(400).json(err);
    }
});
