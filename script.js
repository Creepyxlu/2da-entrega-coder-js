console.log("Te damos la bienvenida a la selección de campeones!")

let campeonSeleccionado = ""
let oro = 10000
let campeonEncontrado = null
//Traemos los elementos del HTML
const seleccionCampeon = document.querySelector("#seleccionCampeon")

const renderizarSelectorCampeones = (error) =>{
    if(!campeonSeleccionado){
        seleccionCampeon.innerHTML = `
            <p>Selecciona un campeón de los que se encuentran disponibles</p>
            <div>    
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>ID</th>
                            <th>Rol usual</th>
                        </tr>
                    </thead>
                    <tbody id="tabla_de_campeones"></tbody>
                </table>
                    <hr>
                    <p>Escribe el ID del campeón que vas a seleccionar</p>
                    <form action="" id="formulario">
                        <input type="text" id="campeon" name="campeon" placeholder="Escribir ID">
                        <input type="button" value="Seleccionar" id="boton">
                        ${error?`<p id="mensaje-error" style="color: red;" >${error}</p>`:""}
                        <br>
                    </form>
                    <hr>
            </div>
        `
    }
    const botonSeleccionar = document.querySelector('#boton');
    const inputCampeon = document.querySelector('#campeon');
    
    botonSeleccionar.addEventListener("click", ()=>{
        campeonEncontrado = campeones.find(campeon => campeon.id === +inputCampeon.value); //Si pongo el "+" al costadito me tranforma el ID a número
        if(campeonEncontrado) {
            renderizarInterfazCampeonSeleccionado(campeonEncontrado, inventario, itemsDisponibles)
        }
        else{

            renderizarSelectorCampeones("ID inválido. Por favor, intenta nuevamente.")
        }   
        inputCampeon.value=""
    })
}

renderizarSelectorCampeones()



//Datos 
const campeones = [
    {nombre: "Dr. Mundo",
        id: 1,
        vida: 623,
        mana: -1, //usaremos -1 cuando el campeón no acceda al uso de este recurso 
        regeneracion_vida: 9,
        poder_curaciones_y_escudos: 0,
        letalidad: 0,
        penetracion_de_magia: 0,
        robo_de_vida: 0,
        omnivampirismo: 0,
        alcance_de_ataque: 125,
        tenacidad: 0,
        dmg_AD: 68,
        dmg_AP: 0,
        armadura: 32,
        resistencia_magica: 29,
        velocidad_ataque: 0.73,
        aceleracion_habilidad: 0,
        golpe_critico: 0,
        velocidad_movimiento: 345,
        rol_usual: "Top",
        tipo_de_recurso:{
            nombre: "ninguno",
        }
    },
    {nombre: "Karthus",
        id: 2,
        vida: 630,
        regeneracion_vida: 7,
        poder_curaciones_y_escudos: 0,
        letalidad: 0,
        penetracion_de_magia: 0,
        robo_de_vida: 0,
        omnivampirismo: 0,
        alcance_de_ataque: 450,
        tenacidad: 0,
        dmg_AD: 46,
        dmg_AP: 18,
        armadura: 21,
        resistencia_magica: 30,
        velocidad_ataque: 0.63,
        aceleracion_habilidad: 0,
        golpe_critico: 0,
        velocidad_movimiento: 335,
        rol_usual: "Mid, Jg",

        tipo_de_recurso:{//Corregir como se ve esto en HTML en caso de ser mana :(
            nombre: "mana",
            cantidad: 467,
            regeneracion_mana: 8,
        }
    },
    {nombre: "Samira",
        id: 3,
        vida: 640,
        regeneracion_vida: 3,
        poder_curaciones_y_escudos: 0,
        letalidad: 0,
        penetracion_de_magia: 0,
        robo_de_vida: 0,
        omnivampirismo: 0,
        alcance_de_ataque: 500,
        tenacidad: 0,
        dmg_AD: 64,
        dmg_AP: 0,
        armadura: 26,
        resistencia_magica: 30,
        velocidad_ataque: 0.66,
        aceleracion_habilidad: 8,
        golpe_critico: 0,
        velocidad_movimiento: 345,
        rol_usual: "ADC",

        tipo_de_recurso:{
            nombre: "mana",
            cantidad: 349,
            regeneracion_mana: 8,
        } 
    }
]
const inventario = [
    {posicion: 1,
        item: "ninguno",
    },
    {posicion: 2,
        item: "ninguno",    
    },
    {posicion: 3,
        item: "ninguno",
    },
    {posicion: 4,
        item: "Centinela Invisible",
    },
    {posicion: 5,
        item: "ninguno",    
    },
    {posicion: 6,
        item: "ninguno",
    },
    {posicion: 7,
        item: "ninguno",
    }
]
const itemsDisponibles = [
    // Items de tipo ward
    { nombre: "Centinela Invisible",
        tipo: "ward",
        id: 4,
        precio: 0,
        habilidad: "Provee visión en el mapa durante un tiempo limitado."

        
    },
    { nombre: "Lente de Oráculo",
        tipo: "ward",
        id: 5,
        precio: 0,
        habilidad: "Revela los wards enemigos y otras unidades invisibles."
    },
    { nombre: "Alteración de Visión Lejana",
        tipo: "ward",
        id: 6,
        precio: 0,
        habilidad: "Ofrece visión en una amplia área alrededor del área seleccionada."
    },

    // Items normales
    { nombre: "Escarcha Eterna",
        tipo: "normal",
        id: 1,
        precio: 3400,
        habilidad: "Aumenta el poder de habilidad y ofrece un bono de vida.",
        estadisticas: {
            dmg_AP: 80,
            vida: 250,
            mana: 600,
            aceleracion_habilidad: 20,
        }
        
    },
    {nombre: "Armadura Petrea",
        tipo: "normal",
        id: 2,
        precio: 3300,
        habilidad: "Aumenta la armadura y la resistencia mágica.",
        estadisticas: {
            armadura: 60,
            resistencia_magica: 40
        }
    },
    {nombre: "Fuerza del Viento",
        tipo: "normal",
        id: 3,
        precio: 2900,
        habilidad: "Mejora el daño de ataque y la velocidad de ataque.",
        estadisticas:{
            dmg_AD: 55,
            velocidad_ataque: 20, // Se puede aplicar la fórmula de aumento de velocidad de ataque
            golpe_critico: 20,
        }
    }
];


//Funciones de renderizado HTML
const renderizarEstadisticasDeCampeonSeleccionadoHTML = (campeon)=>{
    return `
            <table>
                <thead>
                    <tr>
                        <th>Característica</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Vida</td><td>${campeon.vida}</td></tr>

                    ${campeon.tipo_de_recurso.nombre === "mana" ?
                    `
                    <tr><td>Mana</td><td>${campeon.tipo_de_recurso.cantidad}</td></tr>
                    <tr><td>Reneración de mana cada 5s </td><td>${campeon.tipo_de_recurso.regeneracion_mana}</td></tr>
                    `
                    :`<tr><td>Mana</td><td>No utiliza maná</td></tr>`
                    }
                    <tr><td>Regeneración de Vida</td><td>${campeon.regeneracion_vida}</td></tr>
                    <tr><td>Poder de curaciones y escudos</td><td>${campeon.poder_curaciones_y_escudos}</td></tr>
                    <tr><td>Letalidad</td><td>${campeon.letalidad}</td></tr>
                    <tr><td>Penetración de Magia</td><td>${campeon.penetracion_de_magia}</td></tr>
                    <tr><td>Robo de Vida</td><td>${campeon.robo_de_vida}</td></tr>
                    <tr><td>Omnivampirismo</td><td>${campeon.omnivampirismo}</td></tr>
                    <tr><td>Alcance de Ataque</td><td>${campeon.alcance_de_ataque}</td></tr>
                    <tr><td>Tenacidad</td><td>${campeon.tenacidad}</td></tr>
                    <tr><td>Daño de Ataque</td><td>${campeon.dmg_AD}</td></tr>
                    <tr><td>Poder de Habilidad</td><td>${campeon.dmg_AP}</td></tr>
                    <tr><td>Armadura</td><td>${campeon.armadura}</td></tr>
                    <tr><td>Resistencia Mágica</td><td>${campeon.resistencia_magica}</td></tr>
                    <tr><td>Velocidad de Ataque</td><td>${campeon.velocidad_ataque}</td></tr>
                    <tr><td>Aceleración de Habilidad</td><td>${campeon.aceleracion_habilidad}</td></tr>
                    <tr><td>Golpe Crítico</td><td>${campeon.golpe_critico}</td></tr>
                    <tr><td>Velocidad de Movimiento</td><td>${campeon.velocidad_movimiento}</td></tr>
                    <tr><td>Rol Usual</td><td>${campeon.rol_usual}</td></tr>
                </tbody>
            </table>
    `
}//renderiza la muestra de estadisticas del campeon seleccionado

const renderizarItemsHTML = (items) => {
    const tablaDeItemsHTML = document.querySelector('#tabla_de_items');
    let filasHTML = '';  // Variable para acumular todas las filas
    // Iteramos sobre los items y construimos una fila por cada uno
    for (const item of items) {
        filasHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.id}</td>
                <td>${item.tipo}</td>
                <td>${item.precio > 0 ? "$" + item.precio : "Gratis"}</td>
                <td>${item.habilidad}</td>
                <td>
                    <button onclick="agregarAlInventario('${item.id}')">
                        Comprar
                    </button>
                </td>
            </tr>
        `
    }
    // Insertamos la tabla completa con las filas acumuladas
    tablaDeItemsHTML.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Habilidad</th>
                </tr>
            </thead>
            <tbody>
                ${filasHTML}  <!-- Aquí se insertan las filas -->
            </tbody>
        </table>
    `;
};

const renderizarInventarioHTML = (inventario) => {
    return `
        <table>
            <thead>
                <tr>
                    <th>Posición</th>
                    <th>Item</th>
                </tr>
            </thead>
            <tbody>
                ${inventario.map((posicion) => {
                    return `
                        <tr>
                            <td>${posicion.posicion}</td>
                            <td>${posicion.item}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
};
const agregarAlInventario = (itemID) => { 
    const item = itemsDisponibles.find(item => item.id === +itemID);

    //Si item es trully y tiene oro suficiente
    if(item && oro > item.precio){
        console.log(item)
        const posicionVacia = inventario.find(inventarioItem => inventarioItem.item === "ninguno") //verificamos si la posición está o no vacia
        if(posicionVacia){//si la posición está vacía
            posicionVacia.item = item.nombre;
            oro = oro - item.precio;
            const oroHTML = document.querySelector('#oro');
            oroHTML.innerHTML = `Oro disponible: $ ${oro}`


            for (let estadistica in item.estadisticas) {
                campeonEncontrado[estadistica] = campeonEncontrado[estadistica] +  item.estadisticas[estadistica] 
                //Uso los corchetes para entrar, a lo que se le diría, la "key", no al valor de la estadistica, sino a su nombre
            }

            renderizarInterfazCampeonSeleccionado(campeonEncontrado, inventario, itemsDisponibles
            )
        }
        else{
            alert("No tienes más espacio en el inventario")
        }
    }
    else{
        alert("No tienes suficiente oro para comprar este item")
    }
}

//Traemos los elementos del HTML para seleccionar un campeón
const tablaDeCampeonesHTML = document.querySelector('#tabla_de_campeones');

const renderizarInterfazCampeonSeleccionado = (campeon, inventario, itemsDisponibles) => {
    campeonSeleccionado = campeon.nombre;
    seleccionCampeon.innerHTML = `
    <h2>Seleccionaste a ${campeonSeleccionado}</h2>
    <div class="campeon_seleccionado">
        ${renderizarEstadisticasDeCampeonSeleccionadoHTML(campeon)}
        <div>
            ${renderizarInventarioHTML(inventario)}
            <p id="oro"> Oro disponible: $ ${oro}</p>
        </div>
    </div>

    ${renderizarItemsHTML(itemsDisponibles)}
    `
}

const renderizarListaCampeones = (campeones) => {
    tablaDeCampeonesHTML.innerHTML = campeones.map(campeon => `
        <tr>
            <td>${campeon.nombre}</td>
            <td>${campeon.id}</td>
            <td>${campeon.rol_usual}</td>
        </tr>
    `).join('');//Con el join quito las comas segun parece
};

renderizarListaCampeones(campeones)