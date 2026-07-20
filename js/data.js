// Plochkite.bg Premium Redesign Product Catalog Database with 6-Language Translation

const DEFAULT_PRODUCTS = [
    {
        id: "zellige-emerald",
        category: "tiles",
        price: 89.90,
        boxSize: 1.0,
        material: "ceramic",
        color: "green",
        rating: 4.9,
        country: {
            bg: "Мароко", en: "Morocco", ru: "Марокко", ua: "Марокко", es: "Marruecos", it: "Marocco"
        },
        name: {
            bg: "Изумруден Зелиж",
            en: "Moroccan Zellige Emerald",
            ru: "Изумрудный Зеллидж",
            ua: "Смарагдовий Зеліж",
            es: "Zellige Esmeralda de Marruecos",
            it: "Zellige Smeraldo del Marocco"
        },
        description: {
            bg: "Ръчно изработени глинени плочки с уникални гланцирани нюанси, перфектни за акцентни стени.",
            en: "Handcrafted clay tiles with organic shade variation and a glossy glazed finish, perfect for accent walls.",
            ru: "Глиняная плитка ручной работы с органическим градиентом и глянцевой глазурью, идеальна для акцентных стен.",
            ua: "Глиняна плитка ручної роботи з органічним градієнтом та глянцевою глазур'ю, ідеальна для акцентних стін.",
            es: "Azulejos de arcilla hechos a mano con variación de tono orgánica y acabado esmaltado brillante, ideales para paredes decorativas.",
            it: "Piastrelle in argilla fatte a mano con variazione di sfumatura organica e finitura smaltata lucida, ideali per pareti decorative."
        },
        image: "assets/tiles/zellige_emerald.png"
    },
    {
        id: "marble-calacatta",
        category: "tiles",
        price: 64.50,
        boxSize: 1.44,
        material: "porcelain",
        color: "white",
        rating: 4.8,
        country: {
            bg: "Испания", en: "Spain", ru: "Испания", ua: "Іспанія", es: "España", it: "Spagna"
        },
        name: {
            bg: "Калаката Уайт 60х120",
            en: "Calacatta Gold Porcelain 60x120",
            ru: "Калакатта Голд Керамогранит",
            ua: "Калакатта Голд Керамограніт",
            es: "Porcelánico Calacatta Oro 60x120",
            it: "Gres Calacatta Oro 60x120"
        },
        description: {
            bg: "Луксозен полиран гранитогрес с вечна текстура на мрамор Calacatta и златни нишки.",
            en: "Luxurious polished porcelain tiles featuring classic Calacatta marble veining and gold accents.",
            ru: "Роскошный полированный керамогранит с классической текстурой мрамора Calacatta и золотыми прожилками.",
            ua: "Розкішний полірований керамограніт з класичною текстурою мармуру Calacatta та золотими прожилками.",
            es: "Lujosos azulejos de porcelana pulida con vetas de mármol Calacatta clásicas y detalles dorados.",
            it: "Lussuose piastrelle in gres porcellanato lucido con venature classiche di marmo Calacatta e accenti dorati."
        },
        image: "assets/tiles/marble_calacatta.png"
    },
    {
        id: "rimless-toilet",
        category: "toilets",
        price: 389.00,
        boxSize: 1.0, // Individual item count representation
        material: "porcelain",
        color: "white",
        rating: 4.9,
        country: {
            bg: "Италия", en: "Italy", ru: "Италия", ua: "Італія", es: "Italia", it: "Italia"
        },
        name: {
            bg: "Конзолна Тоалетна Rimless",
            en: "Rimless Wall-Hung Toilet Bowl",
            ru: "Подвесной Унитаз Rimless",
            ua: "Підвісний Унітаз Rimless",
            es: "Inodoro Suspendido Rimless",
            it: "Vaso Sospeso Rimless"
        },
        description: {
            bg: "Модерна висяща тоалетна чиния с безръбово измиване Rimless, плавно затварящ се капак и скрит монтаж.",
            en: "Modern wall-hung toilet bowl featuring rimless flush technology, a soft-close seat, and concealed installation.",
            ru: "Современный подвесной унитаз с технологией безободкового смыва Rimless, сиденьем с микролифтом и скрытым монтажом.",
            ua: "Сучасний підвісний унітаз з технологією безободкового змиву Rimless, сидінням з мікроліфтом та прихованим монтажем.",
            es: "Inodoro suspendido moderno con tecnología de descarga sin borde Rimless, asiento con caída amortiguada e instalación oculta.",
            it: "Vaso sospeso moderno con tecnologia di scarico senza brida Rimless, sedile a chiusura rallentata e installazione nascosta."
        },
        image: "assets/tiles/hero.png" // beautiful background as a premium product image fallback
    },
    {
        id: "gold-faucet",
        category: "faucets",
        price: 245.00,
        boxSize: 1.0,
        material: "brass",
        color: "gold",
        rating: 4.7,
        country: {
            bg: "Испания", en: "Spain", ru: "Испания", ua: "Іспанія", es: "España", it: "Spagna"
        },
        name: {
            bg: "Смесител за мивка Brushed Gold",
            en: "Brushed Gold Basin Faucet",
            ru: "Смеситель для раковины Brushed Gold",
            ua: "Змішувач для раковини Brushed Gold",
            es: "Grifo de lavabo Oro Cepillado",
            it: "Miscelatore lavabo Oro Spazzolato"
        },
        description: {
            bg: "Смесител от масивен месинг с покритие от матирано злато и керамичен патрон за прецизен контрол.",
            en: "Solid brass basin faucet with a brushed gold electroplated finish and high-quality ceramic cartridge.",
            ru: "Смеситель для раковины из твердой латуни с покрытием из матового золота и керамическим картриджем.",
            ua: "Змішувач для раковини з твердої латуні з покриттям з матового золота та керамічним картриджем.",
            es: "Grifo de lavabo de latón macizo con acabado de oro cepillado y cartucho cerámico de alta calidad.",
            it: "Miscelatore lavabo in ottone massiccio con finitura oro spazzolato e cartuccia in ceramica di alta qualità."
        },
        image: "assets/tiles/hero.png"
    },
    {
        id: "rain-shower-black",
        category: "showers",
        price: 499.00,
        boxSize: 1.0,
        material: "brass",
        color: "black",
        rating: 4.8,
        country: {
            bg: "Италия", en: "Italy", ru: "Италия", ua: "Італія", es: "Italia", it: "Italia"
        },
        name: {
            bg: "Душ система Мат Черно",
            en: "Matte Black Rain Shower System",
            ru: "Душевая система Матовый Черный",
            ua: "Душова система Матовий Чорний",
            es: "Sistema de ducha Negro Mate",
            it: "Soffione Doccia Nero Opaco"
        },
        description: {
            bg: "Термостатична душ колона с правоъгълна душ пита, ръчен душ и защита от изгаряне при 38°C.",
            en: "Thermostatic shower column with a rain shower head, hand shower, and anti-scald protection at 38°C.",
            ru: "Термостатическая душевая колонна с верхним душем, ручной лейкой и защитой от ожогов при 38°C.",
            ua: "Термостатична душова колона з верхнім душем, ручною лійкою та захистом від опіків при 38°C.",
            es: "Columna de ducha termostática con rociador de lluvia, ducha de mano y protección antiquemaduras a 38°C.",
            it: "Colonna doccia termostatica con soffione a pioggia, doccetta e protezione antiscottatura a 38°C."
        },
        image: "assets/tiles/hero.png"
    }
];

// Read from localStorage to retrieve newly uploaded products by user
function getProducts() {
    const customData = localStorage.getItem('plochkite_custom_products');
    if (customData) {
        try {
            const parsed = JSON.parse(customData);
            return [...DEFAULT_PRODUCTS, ...parsed];
        } catch (e) {
            console.error("Error reading custom products:", e);
            return DEFAULT_PRODUCTS;
        }
    }
    return DEFAULT_PRODUCTS;
}

// Write newly created products back to localStorage
function saveCustomProducts(customList) {
    localStorage.setItem('plochkite_custom_products', JSON.stringify(customList));
}

// Globally export
window.getProducts = getProducts;
window.saveCustomProducts = saveCustomProducts;
window.TILE_CATALOG = getProducts(); // Backwards compatibility for templates
