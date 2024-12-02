import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from '../assets/back.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

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
                { name: "Oats with Berries", 
                  image: oatswberries, 
                  description: "A fiber-rich breakfast with oats and antioxidant-packed berries.", 
                  calories: 289,
                  recipeLink: "https://lovelylittlekitchen.com/triple-berry-oatmeal-breakfast-bowl/" },
                { name: "Avocado Toast", 
                  image: avocadotoast, description: "Whole grain toast with mashed avocado and a sprinkle of seeds.", 
                  calories: 170,
                  recipeLink: "https://www.allrecipes.com/recipe/246803/avocado-toast-vegan/"},
                { name: "Scrambled Eggs with Spinach", 
                  image: scrambledwspinach, 
                  description: "Protein-packed breakfast with leafy greens.",
                  calories: 303,
                  recipeLink: "https://healthyrecipesblogs.com/spinach-scramble/"
                 },
                { name: "Nuts and Seeds Bowl", 
                  image: nutsandseeds, 
                  description: "A mix of heart-healthy nuts and seeds.",
                  calories: 188,
                  recipeLink: "http://www.thelittleloaf.com/2014/06/16/grain-free-fruit-nut-seed-breakfast-bowls/" }
            ],
            lunch: [
                { name: "Grilled Salmon", 
                  image: grilledsalmon, 
                  description: "Omega-3 rich grilled salmon served with veggies.",
                  calories: 318,
                  recipeLink: "https://www.allrecipes.com/recipe/12720/grilled-salmon-i/" },
                { name: "Leafy Greens Salad", 
                  image: lgsalad, 
                  description: "A refreshing salad with spinach, kale, and olive oil dressing.",
                  calories: 110,
                  recipeLink: "https://www.allrecipes.com/recipe/15618/italian-leafy-green-salad/" },
                { name: "Quinoa and Roasted Veggies", 
                  image: quinoaarveg, 
                  description: "A protein-rich quinoa dish.",
                  calories: 233,
                  recipeLink: "https://thefoodiephysician.com/quinoa-with-roasted-vegetables/" },
                { name: "Avocado Chicken Salad", 
                  image: avochicksalad, 
                  description: "Lean chicken with heart-healthy avocado.",
                  calories: 77,
                  recipeLink: "https://www.allrecipes.com/recipe/247412/avocado-chicken-salad-dip/" }
            ],
            dinner: [
                { name: "Mixed Nuts", 
                  image: mixednuts, 
                  description: "A mix of almonds, walnuts, and cashews, perfect for dinner.",
                  calories: 219,
                  recipeLink: "https://www.allrecipes.com/recipe/230159/sweet-salty-spicy-party-nuts/" },
                { name: "Oats Porridge", 
                  image: oatsporridge, 
                  description: "A warm, hearty bowl of oats with your choice of toppings.",
                  calories: 157,
                  recipeLink: "https://www.allrecipes.com/recipe/73155/porridge/" },
                { name: "Lentil Soup", 
                  image: lentilsoup, 
                  description: "Rich in protein and fiber.",
                  calories: 349,
                  recipeLink: "https://www.allrecipes.com/recipe/13978/lentil-soup/"
                 },
                { name: "Mushroom and Tofu Stir-fry", 
                  image: mushatofu, 
                  description: "This tofu veggie stir-fry is quick and easy, making it a great go-to weeknight meal.",
                  calories: 171,
                  recipeLink: "https://www.eatingwell.com/recipe/277158/mushroom-tofu-stir-fry/" }
            ]
        },
        thyroid: {
            breakfast: [
                { name: "Greek Yogurt with Nuts", 
                  image: gyogurtswnuts, 
                  description: "Rich in selenium and protein.",
                  calories: 93,
                  recipeLink: "https://www.eatingwell.com/recipe/260856/greek-yogurt-with-fruit-nuts/" },
                { name: "Avocado and Eggs", 
                  image: avoweggs, 
                  description: "Healthy fats with high-quality protein.",
                  calories: 368,
                  recipeLink: "https://www.foxvalleyfoodie.com/avocado-scrambled-eggs/" },
                { name: "Smoothie Bowl", 
                  image: smoothiebowl, 
                  description: "Blend of fruits and nuts.",
                  calories: 434,
                  recipeLink: "https://themodernproper.com/how-to-make-a-smoothie-bowl" },
                { name: "Chia Pudding", 
                  image: chiapudding, 
                  description: "Chia seeds soaked in almond milk.",
                  calories: 170,
                  recipeLink: "https://www.eatingbirdfood.com/basic-chia-seed-pudding/" }
            ],
            lunch: [
                { name: "Grilled Chicken Salad", 
                  image: gchicksalad, 
                  description: "High in protein and nutrients.",
                  calories: 480,
                  recipeLink: "https://www.dinneratthezoo.com/grilled-chicken-salad/" },
                { name: "Seaweed Salad", 
                  image: seaweedsalad, 
                  description: "Rich in iodine.",
                  calories: 30,
                  recipeLink: "https://www.seriouseats.com/seaweed-salad-recipe" },
                { name: "Lentil Soup", 
                  image: lentilsoup, 
                  description: "A hearty meal with lentils and vegetables.",
                  calories: 349,
                  recipeLink: "https://www.allrecipes.com/recipe/13978/lentil-soup/"},
                { name: "Vegetable Stir-Fry", 
                  image: vegstirfry, 
                  description: "Broccoli and carrots in sesame oil.",
                  calories: 152,
                  recipeLink: "https://therecipecritic.com/vegetable-stir-fry/"}
            ],
            dinner: [
                { name: "Chicken Soup", 
                  image: chickensoup, 
                  description: "Warm and comforting meal.",
                  calories: 319,
                  recipeLink: "https://downshiftology.com/recipes/chicken-soup/"},
                { name: "Grilled Fish", 
                  image: grilledfish, 
                  description: "A thyroid-friendly source of protein.",
                  calories: 554,
                  recipeLink: "https://www.allrecipes.com/recipe/25871/grilled-fish-steaks/" },
                { name: "Sautéed Greens", 
                  image: sgreens, 
                  description: "Spinach and kale with garlic.",
                  calories: 265,
                  recipeLink: "https://www.feastingathome.com/sauteed-kale/"},
                { name: "Egg and Veggie Bowl", 
                  image: eggavegbowl, 
                  description: "Boiled eggs with steamed vegetables.",
                  calories: 386,
                  recipeLink: "https://iowagirleats.com/very-veggie-cauliflower-hash-brown-breakfast-bowl/" }
            ]
        },
        diabetes: {
            breakfast: [
                { name: "Oats with Almond Butter", 
                  image: aboats, 
                  description: "Fiber-packed oats with healthy fats.",
                  calories: 287,
                  recipeLink: "https://www.purelykaylie.com/almond-butter-oatmeal/" },
                { name: "Whole Grain Pancakes", 
                  image: pancake, 
                  description: "Low-GI breakfast option.",
                  calories: 306,
                  recipeLink: "https://www.allrecipes.com/recipe/186802/whole-grain-pancakes/" },
                { name: "Chia Seed Pudding", 
                  image: chiapudding, 
                  description: "Rich in omega-3 fatty acids.",
                  calories: 170,
                  recipeLink: "https://www.eatingbirdfood.com/basic-chia-seed-pudding/" },
                { name: "Smoothie Bowl", 
                  image: smoothiebowl, 
                  description: "Fresh fruits blended with yogurt.",
                  calories: 434,
                  recipeLink: "https://themodernproper.com/how-to-make-a-smoothie-bowl" },
            ],
            lunch: [
                { name: "Quinoa Salad", 
                  image: qsalad, 
                  description: "Light and refreshing.",
                  calories: 270,
                  recipeLink: "https://cookieandkate.com/best-quinoa-salad-recipe/" },
                { name: "Grilled Chicken Wrap", 
                  image: grilledchickwrap, 
                  description: "Low-carb wrap with grilled chicken.",
                  calories: 618,
                  recipeLink: "https://littlesunnykitchen.com/grilled-chicken-wraps/" },
                { name: "Vegetable Curry", 
                  image: vegcurry, 
                  description: "Rich in vitamins and low in carbs.",
                  calories: 259,
                  recipeLink: "https://www.recipetineats.com/vegetable-curry/" },
                { name: "Steamed Fish", 
                  image: steamedfish, 
                  description: "Light and flavorful.",
                  calories: 239,
                  recipeLink: "https://thewoksoflife.com/cantonese-steamed-fish/" }
            ],
            dinner: [
                { name: "Lentil Soup", 
                  image: lentilsoup, 
                  description: "Rich in protein and fiber.",
                  calories: 349,
                  recipeLink: "https://www.allrecipes.com/recipe/13978/lentil-soup/" },
                { name: "Grilled Vegetables", 
                  image: gveg, 
                  description: "A mix of roasted seasonal vegetables.",
                  calories: 35,
                  recipeLink: "https://www.loveandlemons.com/grilled-vegetables/" },
                { name: "Baked Salmon", 
                  image: bakedsalmon, 
                  description: "Protein-rich fish baked with herbs.",
                  calories: 306,
                  recipeLink: "https://www.lecremedelacrumb.com/best-easy-healthy-baked-salmon/" },
                { name: "Stir-Fried Greens", 
                  image: stirfriedg, 
                  description: "Lightly stir-fried kale and broccoli.",
                  calories: 127,
                  recipeLink: "https://www.epicurious.com/recipes/food/views/stir-fried-chinese-greens" }
            ]
        },
        cholesterol: {
            breakfast: [
                { name: "Oats with Fresh Fruits", 
                  image: oatswfruits, 
                  description: "Fiber-rich oats with sliced fruits.",
                  calories: 199,
                  recipeLink: "https://www.yummytoddlerfood.com/oatmeal-with-fruit/" },
                { name: "Avocado Toast", 
                  image: avocadotoast, 
                  description: "Whole grain toast with avocado.",
                  calories: 170,
                  recipeLink: "https://www.allrecipes.com/recipe/246803/avocado-toast-vegan/" },
                { name: "Fruit Smoothie", 
                  image: fruitsmoothies, 
                  description: "Fresh fruit smoothie with chia seeds.",
                  calories: 215,
                  recipeLink: "https://lilluna.com/fruit-smoothie/" },
                { name: "Chia Pudding", 
                  image: chiapudding, 
                  description: "Rich in omega-3 and protein.",
                  calories: 170,
                  recipeLink: "https://www.eatingbirdfood.com/basic-chia-seed-pudding/" }
            ],
            lunch: [
                { name: "Grilled Fish Tacos", 
                  image: gfishtaco, 
                  description: "Delicious tacos with grilled fish.",
                  calories: 327,
                  recipeLink: "https://tastesbetterfromscratch.com/grilled-fish-tacos/" },
                { name: "Quinoa and Veggies", 
                  image: quinoaarveg, 
                  description: "Protein-packed quinoa with vegetables.",
                  calories: 280,
                  recipeLink: "https://www.allrecipes.com/recipe/163044/quinoa-with-veggies/" },
                { name: "Chickpea Salad", 
                    image: chickpeasalad, 
                    description: "Rich in fiber and nutrients.",
                    calories: 210,
                    recipeLink: "https://www.loveandlemons.com/chickpea-salad/" },
                { name: "Grilled Veggie Wrap", 
                  image: gvegwrap, 
                  description: "Low-fat wrap with roasted veggies.",
                  calories: 299,
                  recipeLink: "https://foodwithfeeling.com/grilled-veggie-wraps/" }
            ],
            dinner: [
                { name: "Vegetable Soup", 
                  image: vegsoup, 
                  description: "Warm soup with mixed vegetables.",
                  calories: 198,
                  recipeLink: "https://www.cookingclassy.com/vegetable-soup/" },
                { name: "Roasted Brussels Sprouts", 
                  image: rbrussels, 
                  description: "Crispy and delicious.",
                  calories: 104,
                  recipeLink: "https://www.allrecipes.com/recipe/67952/roasted-brussels-sprouts/" },
                { name: "Grilled Salmon", 
                  image: grilledsalmon, 
                  description: "Rich in omega-3 fatty acids.",
                  calories: 318,
                  recipeLink: "https://www.allrecipes.com/recipe/12720/grilled-salmon-i/" },
                { name: "Lentil Soup", 
                  image: lentilsoup, 
                  description: "A hearty lentil dish with spices.",
                  calories: 349,
                  recipeLink: "https://www.allrecipes.com/recipe/13978/lentil-soup/" }
            ]
        }
    };

    return (
        <div>
            <Link to="/Tips" className="back-button" aria-label="Go back to tips">
                <img src={back} alt="Back" />
            </Link> 

            <h1>Diet Plans</h1>

            {/* Dropdown to select a condition */}
            <div className="condition-selector">
            <label htmlFor="condition" aria-label="Select a health condition">
                Select Your Condition :  </label>

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
        <div className="food-details">
            <span className="food-name">{mealItem.name}</span>
            <p className="food-description">{mealItem.description}</p>
            <p className="food-calories">Calories: {mealItem.calories} kcal</p>
            {mealItem.recipeLink && (
                <a
                    href={mealItem.recipeLink}
                    className="recipe-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faBookOpen} className="icon" /> 
                </a>
            )}
        </div>
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
