//1- receta dinamica desde js
document.querySelector('.recipes-grid').innerHTML += `
   <div class="recipe-card">
        <img src="./images/chocolate.png" alt="">
        <h3>Pastel de Lava de Chocolate</h3>
        <p>Un pastel de chocolate decadente con un centro de chocolate fundido...</p>
        <button class="view-recipes btnrecetas">Ver Receta</button>
    </div>
`;

//2- integracion de filtro de busqueda (buscar receta)
document.querySelector('input[type="text"]').addEventListener('input', function() {
    const search = this.value.toLowerCase();
    document.querySelectorAll('.recipe-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(search) ? 'block' : 'none';
    });
});

//3- integracion de modo claro/oscuro
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Oscuro';
    }
});

//modal para las recetas
const modal = document.getElementById('recipe-modal');
const modalTitle = document.getElementById('recipe-title');
const modalDescription = document.getElementById('recipe-description');
const closeModal = document.querySelector('.close');

// Lista de recetas
const recipes = [
    {
        title: 'Ingredientes',
            description: `
                1 taza de Arroz Arborio de Grano Medio o Arroz Blanco\n
                2 tazas de caldo de pollo\n
                1 cucharada de aceite de oliva\n
                1 cucharada de ajo picado\n
                ½ taza de cebolla picada\n
                8 onzas de champiñones, en rodajas\n
                1 lata (12 oz.) de leche evaporada\n
                ¼ taza de queso parmesano rallado\n
                sal y pimienta negra molida, al gusto`
    },
    {
        title: 'Ingredientes',
        description: `
                2 cucharaditas de aceite de oliva\n
                1 cucharada de alcaparras escurridas\n
                1 cucharadita de cáscara de limón fresco rallada\n
                1/2 taza de Crema Daisy light\n
                1 libra de filete de salmón fresco\n
                1 cucharadita de hierba de eneldo seca\n
                1 cucharada de jugo de limón\n
                1 cucharadita de miel\n
                1 cucharadita de mostaza Dijon\n
                1/4 cucharadita de pimienta negra\n
                1/4 cucharadita de sal de mar\n
                1 diente de ajo picado`
    },
    {
        title: 'Ingredientes',
        description: `
                250g tofu firme en dados\n
                50g de judías verdes en pedacitos\n
                50g de tirabeques cortados por la mitad en diagonal\n
                1 guindilla pequeña finamente picada\n
                1 diente de ajo finamente picado\n
                15g de jengibre fresco finamente picado\n
                1 tallo pequeño de pak choi (parte blanca) en tiras\n
                50g de brotes de soja\n
                5 cucharadas de aceite para freír\n
                2 cucharadas Kikkoman aderezo para la Preparación del arroz para sushi (125ml)\n
                2 cucharadas Kikkoman Salsa de Soja naturalmente fermentada\n
                1 cucharada Kikkoman aceite de Sésamo Toastado`
    },
    {
        title: 'Ingredientes',
        description: `  
            Cocoa sin azúcar para repostería\n
            6oz de chocolate semiamargo para repostería, picado\n
            1/2 taza más 2 cucharadas de mantequilla o de margarina\n
            3 huevos enteros\n
            3 yemas de huevo\n
            1 1/2 tazas de azúcar en polvo\n
            1/2 taza de harina multiusos\n
            Azúcar en polvo adicional, opcional\n
            Naranjitas chinas azucaradas (sugared kumquats), opcionales`
    }
];

// Abrir modal
document.querySelectorAll('.btnrecetas').forEach((button, index) => {
    button.addEventListener('click', () => {
        const recipe = recipes[index];
        modalTitle.textContent = recipe.title;
        modalDescription.textContent = recipe.description;
        modal.style.display = 'block';
    });
});

// Cerrar modal en la "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});


//4 - modal para enviar recetas
document.addEventListener('DOMContentLoaded', () => {
    const sendRecipeModal = document.getElementById('send-recipe-modal');
    const sendRecipeButton = document.querySelector('.filter a');
    const closeModal = sendRecipeModal.querySelector('.close');
    const form = document.getElementById('recipe-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    sendRecipeButton.addEventListener('click', (event) => {
        event.preventDefault();
        sendRecipeModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        sendRecipeModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === sendRecipeModal) {
            sendRecipeModal.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío real del formulario
        confirmationMessage.style.display = 'block'; // MSG confirmacion
        setTimeout(() => {
            sendRecipeModal.style.display = 'none'; // Cierrar modal en 2 segundos
        }, 2000);
    });
});

