import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import "../styles/workoutsanddiets.css";

function Workouts() {
    const [selectedCondition, setSelectedCondition] = useState("");

    // Data structure with at least 8 videos for each condition
    const workoutVideos = {
        // Workouts for Heart Condition
        heartDisease: [
            { name: "Walking Exercise", description: "Low-intensity walking for cardiovascular health.", video: "https://www.youtube.com/embed/aKQC07unLr0?si=UiBFR6s-pq1RX7tL" },
            { name: "Gentle Yoga", description: "Basic yoga poses to improve heart health.", video: "https://www.youtube.com/embed/VpW33Celubg" },
            { name: "Low-Impact Cardio", description: "Low-impact exercises suitable for the heart.", video: "https://www.youtube.com/embed/4AObAU-EcYE" },
            { name: "Stretching", description: "Full-body stretches to improve flexibility.", video: "https://www.youtube.com/embed/2L2lnxIcNmo" },
            { name: "Breathing Exercises", description: "Simple breathing techniques for relaxation.", video: "https://www.youtube.com/embed/QhIxGtxIFF4?si=21NszhQh3vkKidkf" },
            { name: "Chair Yoga", description: "Gentle yoga using a chair for support.", video: "https://www.youtube.com/embed/KEjiXtb2hRg" },
            { name: "Seated Cardio", description: "Low-intensity seated exercises for the heart.", video: "https://www.youtube.com/embed/qvtrb7DJGG0?si=4w8ui-GJ2Tls3Fz2" },
            { name: "Resistance Band Training", description: "Light resistance exercises to build strength.", video: "https://www.youtube.com/embed/nnkuEOs_ITY?si=iUCakS7pCqtVtzmJ" },
        ],
        // Workouts for thyroid
        thyroid: [
            { name: "Yoga for Thyroid", description: "Yoga poses specifically for thyroid health.", video: "https://www.youtube.com/embed/rmNzv9D4QMs?si=VDiWgfDFU6UhfMdl" },
            { name: "Surya Namaskar", description: "Sun salutations to stimulate metabolism.", video: "https://www.youtube.com/embed/AbPufvvYiSw?si=tguPvhKR1LEaOvCQ" },
            { name: "Neck Stretches", description: "Exercises to relax and stretch the neck.", video: "https://www.youtube.com/embed/s-7lyvblFNI?si=583SX61eLAr_AwkA" },
            { name: "Deep Breathing", description: "Pranayama breathing techniques for thyroid health.", video: "https://www.youtube.com/embed/acUZdGd_3Dg?si=rmrlL9TGbgJElt86" },
            { name: "Seated Meditation", description: "Calming meditation to relieve stress.", video: "https://www.youtube.com/embed/09_sEEAg2fc?si=N-ZeFqHltp7RaB1F" },
            { name: "Forward Bend Pose", description: "Forward bends to stimulate the thyroid gland.", video: "https://www.youtube.com/embed/_eWWLp3Dc_I?si=f_slFlwVSLZMNpUg" },
            { name: "Bridge Pose", description: "Strengthens neck and supports thyroid health.", video: "https://www.youtube.com/embed/XUcAuYd7VU0?si=uPTo405IUjwPr6yb" },
            { name: "Shoulder Stand", description: "Advanced pose for thyroid stimulation.", video: "https://www.youtube.com/embed/SOHsI7XI0mg?si=yfRa_-t0JZgslXWq" },
        ],
        // Workouts for diabetic people
        diabetes: [
            { name: "Chair Yoga", description: "Gentle yoga exercises for better blood sugar control.", video: "https://www.youtube.com/embed/-Ts01MC2mIo?si=TLQlP4gtPYhX1tVO" },
            { name: "Walking Exercise", description: "Daily walking routine to manage diabetes.", video: "https://www.youtube.com/embed/YS55RsOK3oM?si=4Xq0l_Qh5VmTbBho" },
            { name: "Leg Raises", description: "Lower body exercises to improve circulation.", video: "https://www.youtube.com/embed/U4L_6JEv9Jg?si=eLNDLVZY7SnDGeEk" },
            { name: "Strength Training", description: "Lightweight strength exercises for muscle health.", video: "https://www.youtube.com/embed/H1F-UfC8Mb8?si=hM6HzG7trmwW9pfN" },
            { name: "Morning Yoga", description: "Full-body yoga flow for blood sugar balance.", video: "https://www.youtube.com/embed/T41mYCmtWls?si=19ePWJFHcttvboji" },
            { name: "Stretching Routine", description: "Improves flexibility and reduces tension.", video: "https://www.youtube.com/embed/FI51zRzgIe4?si=nR9_F6La57SqJKLV" },
            { name: "Tai Chi", description: "Gentle martial arts for relaxation and energy.", video: "https://www.youtube.com/embed/pa_I5NAOW4k?si=HO5cQp6UHHMfXPbq" },
            { name: "Resistance Training", description: "Strength-building exercises for insulin sensitivity.", video: "https://www.youtube.com/embed/t3kL5gswXAc?si=xRbftzz88YyEtw1i" },
        ],
        // Workouts for cholestrol
        cholesterol: [
            { name: "Cardio for Cholesterol", description: "Heart-pumping cardio exercises.", video: "https://www.youtube.com/embed/dgu_VakBrIc?si=8IKnRzJhzAKzU6T0" },
            { name: "Yoga for Cholesterol", description: "Yoga to help reduce cholesterol levels.", video: "https://www.youtube.com/embed/CfojB8rywBI?si=M6q1H_Oz3M61anN5" },
            { name: "Cycling Indoors", description: "Stationary cycling for a cardiovascular boost.", video: "https://www.youtube.com/embed/4GtsF-TyyHA?si=G87HWmFiKGaS3YOI" },
            { name: "Resistance Band Training", description: "Strength-building with resistance bands.", video: "https://www.youtube.com/embed/pV73fvNABlg?si=hUlNPFD-kvX0IPZe" },
            { name: "Breathing Techniques", description: "Pranayama for reducing stress and cholesterol.", video: "https://www.youtube.com/embed/odADwWzHR24?si=fgwOcLgFyFCE0wVU" },
            { name: "High-Intensity Low-Impact Workout", description: "Intense workout that’s easy on the joints.", video: "https://www.youtube.com/embed/Ba3qZjzPonI?si=ega-nGslx8GaWfi5" },
            { name: "Stretching Routine", description: "Stretching for flexibility and stress relief.", video: "https://www.youtube.com/embed/uMfNNGYunX0?si=z5d2Q_oheppx42a1" },
            { name: "Jogging in Place", description: "Light jogging to improve circulation.", video: "https://www.youtube.com/embed/iWkH4OTjVkQ?si=l4R9uItaxQILTGMm" },
        ],
    };
    

    return (
        <div>
            <Link to="/Tips" className="back-button">
                <img src={back} alt="Back" />
            </Link>
            <h1>Workouts</h1>
            <div className="condition-selector">
                <label htmlFor="condition">Select Your Condition: </label>
                <select
                    id="condition"
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                >
                    <option value="">-- Choose an Option --</option>
                    <option value="heartDisease">Heart Disease</option>
                    <option value="thyroid">Thyroid</option>
                    <option value="diabetes">Diabetes</option>
                    <option value="cholesterol">Cholesterol</option>
                </select>
            </div>

            {selectedCondition && (
                <div className="workout-list">
                    <h2>Recommended Workouts for {selectedCondition.replace(/([A-Z])/g, " $1")}:</h2>
                    <div className="workout-grid">
                        {workoutVideos[selectedCondition].map((workout, index) => (
                            <div key={index} className="workout-item">
                                <iframe width="300" 
                                height="200" 
                                src={workout.video} 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                                </iframe>
                                <h3>{workout.name}</h3>
                                <p>{workout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Workouts;
