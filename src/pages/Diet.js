import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from '../assets/back.png';
// Heart Disease Food pics
import oatswberries from '../assets/food/oatswithberries.png';
import avocadotoast from '../assets/food/avocadotoast.png';
import scrambledwspinach from '../assets/food/scrambledwspinach.jpg';
import nutsandseeds from '../assets/food/nutsandseeds.png';
import grilledsalmon from '../assets/food/grilledsalmon.png';
import lgsalad from '../assets/food/greensalad.png';
import quinoaarveg from '../assets/food/quinoaarveg.png';
import avochicksalad from '../assets/food/avochicksalad.jpg';
import mixednuts from '../assets/food/mixednuts.png';
import oatsporridge from '../assets/food/oatsporridge.png';
import lentilsoup from '../assets/food/lentilsoup.png';
import mushatofu from '../assets/food/mushatofu.png';

import fruitsmoothies from '../assets/food/fruitsmoothies.png';
import "../styles/workoutsanddiets.css";

function Diet() {
    const [selectedCondition, setSelectedCondition] = useState("");

    // Data for each condition with meals categorized by breakfast, lunch, and dinner
    const foodLists = {
        heartDisease: {
            breakfast: [
                { name: "Oats with Berries", image: oatswberries, description: "A fiber-rich breakfast with oats and antioxidant-packed berries." },
                { name: "Avocado Toast", image: avocadotoast, description: "Whole grain toast with mashed avocado and a sprinkle of seeds." },
                { name: "Scrambled Eggs with Spinach", image: scrambledwspinach, description: "Protein-packed breakfast with leafy greens." },
                { name: "Nuts and Seeds Bowl", image: nutsandseeds, description: "A mix of heart-healthy nuts and seeds." }
            ],
            lunch: [
                { name: "Grilled Salmon", image: grilledsalmon, description: "Omega-3 rich grilled salmon served with veggies." },
                { name: "Leafy Greens Salad", image: lgsalad, description: "A refreshing salad with spinach, kale, and olive oil dressing." },
                { name: "Quinoa and Roasted Veggies", image: quinoaarveg, description: "A protein-rich quinoa dish." },
                { name: "Avocado Chicken Salad", image: avochicksalad, description: "Lean chicken with heart-healthy avocado." }
            ],
            dinner: [
                { name: "Mixed Nuts", image: mixednuts, description: "A mix of almonds, walnuts, and cashews, perfect for dinner." },
                { name: "Oats Porridge", image: oatsporridge, description: "A warm, hearty bowl of oats with your choice of toppings." },
                { name: "Lentil Soup", image: lentilsoup, description: "Rich in protein and fiber." },
                { name: "Mushroom and Tofu Stir-fry", image: mushatofu, description: "This tofu veggie stir-fry is quick and easy, making it a great go-to weeknight meal." }
            ]
        },
        thyroid: {
            breakfast: [
                { name: "Scrambled Eggs", image: "/assets/nuts.jpg", description: "Fluffy scrambled eggs with a side of spinach." },
                { name: "Yogurt with Brazil Nuts", image: "/assets/yogurt.jpg", description: "Creamy yogurt with crunchy Brazil nuts for added selenium." }
            ],
            lunch: [
                { name: "Grilled Chicken", image: "/assets/chicken.jpg", description: "Tender grilled chicken breast with a side of veggies." },
                { name: "Seaweed Salad", image: "/assets/seaweed.jpg", description: "A light salad with seaweed, sesame seeds, and rice vinegar." }
            ],
            dinner: [
                { name: "Eggs and Avocado", image: "/assets/eggs.jpg", description: "Scrambled eggs with mashed avocado and a sprinkle of pepper." },
                { name: "Chicken Stir-fry", image: "/assets/chicken-stir-fry.jpg", description: "Stir-fried chicken with mixed vegetables and ginger sauce." }
            ]
        },
        diabetes: {
            breakfast: [
                { name: "Whole Grain Pancakes", image: "/assets/whole-grains.jpg", description: "Fluffy whole grain pancakes with a drizzle of honey." },
                { name: "Avocado Toast", image: "/assets/avocado.jpg", description: "Avocado toast topped with tomato and a squeeze of lemon." }
            ],
            lunch: [
                { name: "Leafy Greens Salad", image: "/assets/leafy-greens.jpg", description: "Fresh spinach, kale, and avocado with olive oil dressing." },
                { name: "Grilled Chicken Wrap", image: "/assets/chicken-wrap.jpg", description: "A healthy wrap with grilled chicken and veggies." }
            ],
            dinner: [
                { name: "Baked Salmon", image: "/assets/salmon.jpg", description: "Oven-baked salmon with a lemon dill sauce." },
                { name: "Roasted Vegetables", image: "/assets/roasted-vegetables.jpg", description: "A mix of roasted carrots, zucchini, and bell peppers." }
            ]
        },
        cholesterol: {
            breakfast: [
                { name: "Oats with Fruit", image: "/assets/oats.jpg", description: "Oats topped with fresh fruit for a heart-healthy breakfast." },
                { name: "Fruit Smoothie", image: fruitsmoothies, description: "A refreshing smoothie made with fresh fruits and chia seeds." }
            ],
            lunch: [
                { name: "Grilled Fatty Fish", image: "/assets/fatty-fish.jpg", description: "Grilled mackerel with a side of quinoa." },
                { name: "Vegetable Stir-fry", image: "/assets/vegetable-stir-fry.jpg", description: "Stir-fried vegetables with a sesame oil dressing." }
            ],
            dinner: [
                { name: "Chickpea Salad", image: "/assets/chickpea-salad.jpg", description: "Chickpeas with cucumbers, tomatoes, and olive oil dressing." },
                { name: "Lentil Soup", image: "/assets/lentil-soup.jpg", description: "A hearty lentil soup with carrots, celery, and spices." }
            ]
        }
    };

    return (
        <div>
            <Link to="/Tips" className="back-button">
                <img src={back} alt="Back" />
            </Link>
            <h1>Diet Plans</h1>

            {/* Dropdown to select a condition */}
            <div className="condition-selector">
                <label htmlFor="condition">Select Your Condition:</label>
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

            {/* Render the list of foods based on the selected condition */}
            {selectedCondition && (
                <div className="food-list">
                    <h2>Recommended Foods for {selectedCondition.replace(/([A-Z])/g, " $1")}:</h2>
                    {["breakfast", "lunch", "dinner"].map((meal) => (
                        <div key={meal}>
                            <h3>{meal.charAt(0).toUpperCase() + meal.slice(1)}</h3>
                            <ul>
                                {foodLists[selectedCondition][meal].map((mealItem, index) => (
                                    <li key={index} className="food-item">
                                        <img src={mealItem.image} alt={mealItem.name} className="food-image" />
                                        <span>{mealItem.name}</span>
                                        <p>{mealItem.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Diet;
