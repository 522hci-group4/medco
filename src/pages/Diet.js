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

// Thyroid Food pics
import gyogurtswnuts from '../assets/food/gyogurtswnuts.png';
import avoweggs from '../assets/food/avoweggs.png';
import smoothiebowl from '../assets/food/smoothiebowl.png';
import chiapudding from '../assets/food/chiapudding.png';
import gchicksalad from '../assets/food/gchicksalad.png';
import seaweedsalad from '../assets/food/seaweedsalad.jpg';
import vegstirfry from '../assets/food/vegstirfry.png';
import chickensoup from '../assets/food/chickensoup.png';
import grilledfish from '../assets/food/grilledfish.png';
import sgreens from '../assets/food/sgreens.jpg';
import eggavegbowl from '../assets/food/eggavegbowl.jpg';


// Diabetes Food pics
import aboats from '../assets/food/aboats.jpg';
import pancake from '../assets/food/pancake.jpg';
import qsalad from '../assets/food/qsalad.png';
import grilledchickwrap from '../assets/food/grilledchickwrap.png';
import vegcurry from '../assets/food/vegcurry.png';
import steamedfish from '../assets/food/steamedfish.png';
import gveg from '../assets/food/gveg.png';
import bakedsalmon from '../assets/food/bakedsalmon.png';
import stirfriedg from '../assets/food/stirfriedg.jpg';

//Cholestrol Food pics
import oatswfruits from '../assets/food/oatswfruits.png';
import fruitsmoothies from '../assets/food/fruitsmoothies.png';
import gfishtaco from '../assets/food/gfishtaco.jpg';
import chickpeasalad from '../assets/food/chickpeasalad.png';
import gvegwrap from '../assets/food/gvegwrap.png';
import vegsoup from '../assets/food/vegsoup.png';
import rbrussels from '../assets/food/rbrussels.jpg';

//Importing CSS
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
                { name: "Greek Yogurt with Nuts", image: gyogurtswnuts, description: "Rich in selenium and protein." },
                { name: "Avocado and Eggs", image: avoweggs, description: "Healthy fats with high-quality protein." },
                { name: "Smoothie Bowl", image: smoothiebowl, description: "Blend of fruits and nuts." },
                { name: "Chia Pudding", image: chiapudding, description: "Chia seeds soaked in almond milk." }
            ],
            lunch: [
                { name: "Grilled Chicken Salad", image: gchicksalad, description: "High in protein and nutrients." },
                { name: "Seaweed Salad", image: seaweedsalad, description: "Rich in iodine." },
                { name: "Lentil Soup", image: lentilsoup, description: "A hearty meal with lentils and vegetables." },
                { name: "Vegetable Stir-Fry", image: vegstirfry, description: "Broccoli and carrots in sesame oil." }
            ],
            dinner: [
                { name: "Chicken Soup", image: chickensoup, description: "Warm and comforting meal." },
                { name: "Grilled Fish", image: grilledfish, description: "A thyroid-friendly source of protein." },
                { name: "Sautéed Greens", image: sgreens, description: "Spinach and kale with garlic." },
                { name: "Egg and Veggie Bowl", image: eggavegbowl, description: "Boiled eggs with steamed vegetables." }
            ]
        },
        diabetes: {
            breakfast: [
                { name: "Oats with Almond Butter", image: aboats, description: "Fiber-packed oats with healthy fats." },
                { name: "Whole Grain Pancakes", image: pancake, description: "Low-GI breakfast option." },
                { name: "Chia Seed Pudding", image: chiapudding, description: "Rich in omega-3 fatty acids." },
                { name: "Smoothie Bowl", image: smoothiebowl, description: "Fresh fruits blended with yogurt." }
            ],
            lunch: [
                { name: "Quinoa Salad", image: qsalad, description: "Light and refreshing." },
                { name: "Grilled Chicken Wrap", image: grilledchickwrap, description: "Low-carb wrap with grilled chicken." },
                { name: "Vegetable Curry", image: vegcurry, description: "Rich in vitamins and low in carbs." },
                { name: "Steamed Fish", image: steamedfish, description: "Light and flavorful." }
            ],
            dinner: [
                { name: "Lentil Soup", image: lentilsoup, description: "Rich in protein and fiber." },
                { name: "Grilled Vegetables", image: gveg, description: "A mix of roasted seasonal vegetables." },
                { name: "Baked Salmon", image: bakedsalmon, description: "Protein-rich fish baked with herbs." },
                { name: "Stir-Fried Greens", image: stirfriedg, description: "Lightly stir-fried kale and broccoli." }
            ]
        },
        cholesterol: {
            breakfast: [
                { name: "Oats with Fresh Fruits", image: oatswfruits, description: "Fiber-rich oats with sliced fruits." },
                { name: "Avocado Toast", image: avocadotoast, description: "Whole grain toast with avocado." },
                { name: "Fruit Smoothie", image: fruitsmoothies, description: "Fresh fruit smoothie with chia seeds." },
                { name: "Chia Pudding", image: chiapudding, description: "Rich in omega-3 and protein." }
            ],
            lunch: [
                { name: "Grilled Fish Tacos", image: gfishtaco, description: "Delicious tacos with grilled fish." },
                { name: "Quinoa and Veggies", image: quinoaarveg, description: "Protein-packed quinoa with vegetables." },
                { name: "Chickpea Salad", image: chickpeasalad, description: "Rich in fiber and nutrients." },
                { name: "Grilled Veggie Wrap", image: gvegwrap, description: "Low-fat wrap with roasted veggies." }
            ],
            dinner: [
                { name: "Vegetable Soup", image: vegsoup, description: "Warm soup with mixed vegetables." },
                { name: "Roasted Brussels Sprouts", image: rbrussels, description: "Crispy and delicious." },
                { name: "Grilled Salmon", image: grilledsalmon, description: "Rich in omega-3 fatty acids." },
                { name: "Lentil Soup", image: lentilsoup, description: "A hearty lentil dish with spices." }
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
                <label htmlFor="condition">Select Your Condition:  </label>
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
