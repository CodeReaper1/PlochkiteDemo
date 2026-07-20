// Plochkite.bg Redesign Core Controller (6-Language Translation & Admin Dashboard Support)

const TRANSLATIONS = {
    bg: {
        nav_home: "Начало",
        nav_catalog: "Каталог",
        nav_showroom: "Шоурум Варна",
        nav_admin: "Админ Панел",
        hero_tagline: "ДИРЕКТЕН ВНОС & ГАРАНЦИЯ",
        hero_title: "Луксозни плочки и пълно оборудване за баня",
        hero_desc: "Открийте най-добрите колекции плочки от Испания и Италия и се насладете на първокласно санитарно оборудване, смесители и душ системи. Попитайте за безплатни мостри.",
        btn_explore: "Разгледай Каталога",
        btn_contact: "Връзка с нас",
        section_cat_subtitle: "КУРАТОРСКИ КОЛЕКЦИИ",
        section_cat_title: "Нашите Основни Категории",
        cat_tiles: "Плочки",
        cat_toilets: "Санитария & Тоалетни",
        cat_faucets: "Смесители",
        cat_showers: "Душове & Колони",
        cat_accessories: "Аксесоари за баня",
        guarantee_1: "Професионално обслужване и консултации",
        guarantee_2: "Бърза доставка в цяла България",
        guarantee_3: "Възможност за съхранение в наш склад",
        filter_title: "Филтриране",
        filter_clear: "Изчисти",
        filter_category: "Категория",
        filter_material: "Материал",
        filter_color: "Цвят",
        filter_price: "Цена (лв.)",
        sort_label: "Сортиране:",
        sort_featured: "Препоръчани",
        sort_price_asc: "Цена: Ниска към висока",
        sort_price_desc: "Цена: Висока към ниска",
        sort_rating: "Оценка на клиенти",
        search_placeholder: "Търси артикул по име, цвят...",
        price_unit: "лв.",
        box_unit: "бр. / пакет",
        btn_add_cart: "Добави в количка",
        btn_view_details: "Виж Детайли",
        calc_header: "Калкулатор за пакети",
        calc_area: "Площ на помещението (м²)",
        calc_waste: "Фира (препоръчително 10%)",
        calc_boxes_needed: "Необходими бройки/кашони:",
        calc_total_price: "Обща сума:",
        cart_title: "Количка",
        cart_empty: "Количката ви е празна",
        cart_subtotal: "Междинна сума",
        cart_shipping: "Доставка",
        cart_shipping_free: "Вземане от склад Варна (БЕЗПЛАТНО)",
        cart_shipping_paid: "С куриер (цени по тарифа)",
        cart_total: "Общо",
        btn_checkout: "Завърши поръчката",
        showroom_title: "Шоурум гр. Варна",
        showroom_desc: "Заповядайте на място, за да разгледате нашите мостри и да се консултирате с екипа ни за най-подходящите решения за вашия дом.",
        showroom_address: "Адрес: гр. Варна, бул. Приморски 17",
        showroom_hours: "Работно време",
        showroom_weekdays: "Понеделник - Петък: 09:00 - 18:00",
        showroom_saturday: "Събота: 09:30 - 14:00",
        showroom_sunday: "Неделя: Затворено",
        consult_header: "Консултация & Индивидуален Дизайн",
        form_name: "Вашето име",
        form_phone: "Телефонен номер",
        form_email: "Имейл адрес",
        form_date: "Дата на посещение",
        form_time: "Желан час",
        form_msg: "Бележки / Размери на помещението",
        btn_book: "Изпрати запитване",
        admin_title: "Управление на Магазина",
        admin_add_product: "Добавяне / Редакция на Артикул",
        admin_field_name: "Име на продукта",
        admin_field_price: "Цена (лв.)",
        admin_field_category: "Категория",
        admin_field_material: "Материал / Състав",
        admin_field_color: "Цвят",
        admin_field_image: "URL Адрес на снимка",
        admin_field_desc: "Описание на артикула",
        admin_btn_save: "Запази Продукта",
        admin_btn_cancel: "Отказ",
        admin_list_title: "Списък с активни артикули",
        admin_action_edit: "Редакция",
        admin_action_delete: "Изтрий",
        toast_cart_added: "Артикулът беше добавен в количката!",
        toast_booking_success: "Запитването е изпратено успешно! Очаквайте обаждане.",
        toast_checkout_success: "Поръчката ви беше завършена успешно. Благодарим ви!",
        toast_admin_add: "Продуктът беше успешно добавен в каталога!",
        toast_admin_edit: "Промените по продукта бяха запазени успешно!",
        toast_admin_delete: "Продуктът беше премахнат от каталога!"
    },
    en: {
        nav_home: "Home",
        nav_catalog: "Catalog",
        nav_showroom: "Varna Showroom",
        nav_admin: "Admin Panel",
        hero_tagline: "DIRECT IMPORT & WARRANTY",
        hero_title: "Luxury Tiles & Complete Bathroom Equipment",
        hero_desc: "Discover premium tile collections imported directly from Spain and Italy, alongside high-end sanitaryware, faucets, and rain showers. Request free samples.",
        btn_explore: "Browse Catalog",
        btn_contact: "Contact Us",
        section_cat_subtitle: "CURATED COLLECTIONS",
        section_cat_title: "Our Main Categories",
        cat_tiles: "Tiles & Ceramics",
        cat_toilets: "Toilets & Sanitaryware",
        cat_faucets: "Faucets & Fittings",
        cat_showers: "Showers & Columns",
        cat_accessories: "Bathroom Accessories",
        guarantee_1: "Professional customer service & guidance",
        guarantee_2: "Fast shipping throughout Bulgaria",
        guarantee_3: "Free warehouse storage option",
        filter_title: "Filters",
        filter_clear: "Clear All",
        filter_category: "Category",
        filter_material: "Material",
        filter_color: "Color",
        filter_price: "Price (BGN)",
        sort_label: "Sort by:",
        sort_featured: "Featured",
        sort_price_asc: "Price: Low to High",
        sort_price_desc: "Price: High to Low",
        sort_rating: "Customer Rating",
        search_placeholder: "Search catalog by name, color...",
        price_unit: "BGN",
        box_unit: "pcs / box",
        btn_add_cart: "Add to Cart",
        btn_view_details: "View Details",
        calc_header: "Quantity Calculator",
        calc_area: "Required Area (m²)",
        calc_waste: "Waste Factor (10% recommended)",
        calc_boxes_needed: "Required units/boxes:",
        calc_total_price: "Total Price:",
        cart_title: "Your Cart",
        cart_empty: "Your cart is currently empty",
        cart_subtotal: "Subtotal",
        cart_shipping: "Shipping",
        cart_shipping_free: "Store Pickup Varna (FREE)",
        cart_shipping_paid: "Courier Delivery (Freight charges apply)",
        cart_total: "Total",
        btn_checkout: "Complete Purchase",
        showroom_title: "Varna Showroom",
        showroom_desc: "Visit our showroom to feel the materials and consult with our team to find the best solutions for your spaces.",
        showroom_address: "Address: Varna, bul. Primorski 17",
        showroom_hours: "Opening Hours",
        showroom_weekdays: "Monday - Friday: 09:00 - 18:00",
        showroom_saturday: "Saturday: 09:30 - 14:00",
        showroom_sunday: "Sunday: Closed",
        consult_header: "Consultation & Custom Quote",
        form_name: "Your Name",
        form_phone: "Phone Number",
        form_email: "Email Address",
        form_date: "Preferred Date",
        form_time: "Time Slot",
        form_msg: "Notes / Room Dimensions",
        btn_book: "Send Inquiry",
        admin_title: "Inventory Management",
        admin_add_product: "Add / Edit Catalog Item",
        admin_field_name: "Product Name",
        admin_field_price: "Price (BGN)",
        admin_field_category: "Category",
        admin_field_material: "Material",
        admin_field_color: "Color",
        admin_field_image: "Image URL",
        admin_field_desc: "Description",
        admin_btn_save: "Save Product",
        admin_btn_cancel: "Cancel",
        admin_list_title: "Active Catalog Items",
        admin_action_edit: "Edit",
        admin_action_delete: "Delete",
        toast_cart_added: "Item added to cart successfully!",
        toast_booking_success: "Inquiry sent! We will contact you shortly.",
        toast_checkout_success: "Your order was placed successfully. Thank you!",
        toast_admin_add: "Product successfully added to catalog!",
        toast_admin_edit: "Product updates saved successfully!",
        toast_admin_delete: "Product removed from catalog!"
    },
    ru: {
        nav_home: "Главная",
        nav_catalog: "Каталог",
        nav_showroom: "Шоурум Варна",
        nav_admin: "Админ Панель",
        hero_tagline: "ПРЯМОЙ ИМПОРТ & ГАРАНТИЯ",
        hero_title: "Люксовая плитка и полное оборудование для ванной",
        hero_desc: "Откройте для себя лучшие коллекции плитки из Испании и Италии, а также элитную сантехнику, смесители и душевые системы. Закажите образцы.",
        btn_explore: "Смотреть Каталог",
        btn_contact: "Связаться с нами",
        section_cat_subtitle: "ЛУЧШИЕ КОЛЛЕКЦИИ",
        section_cat_title: "Наши основные категории",
        cat_tiles: "Плитка и керамогранит",
        cat_toilets: "Санитария и унитазы",
        cat_faucets: "Смесители",
        cat_showers: "Душевые системы",
        cat_accessories: "Аксессуары для ванной",
        guarantee_1: "Профессиональное обслуживание и консультации",
        guarantee_2: "Быстрая доставка по всей Болгарии",
        guarantee_3: "Бесплатное хранение на нашем складе",
        filter_title: "Фильтрация",
        filter_clear: "Очистить",
        filter_category: "Категория",
        filter_material: "Материал",
        filter_color: "Цвет",
        filter_price: "Цена (лв.)",
        sort_label: "Сортировка:",
        sort_featured: "Рекомендуемые",
        sort_price_asc: "Цена: по возрастанию",
        sort_price_desc: "Цена: по убыванию",
        sort_rating: "Оценка клиентов",
        search_placeholder: "Искать товар по названию, цвету...",
        price_unit: "лв.",
        box_unit: "шт. / упак.",
        btn_add_cart: "В корзину",
        btn_view_details: "Подробнее",
        calc_header: "Калькулятор упаковок",
        calc_area: "Необходимая площадь (м²)",
        calc_waste: "Запас на подрезку (рекомендуется 10%)",
        calc_boxes_needed: "Необходимое количество/коробки:",
        calc_total_price: "Итоговая сумма:",
        cart_title: "Корзина",
        cart_empty: "Ваша корзина пуста",
        cart_subtotal: "Подытог",
        cart_shipping: "Доставка",
        cart_shipping_free: "Самовывоз со склада Варна (БЕСПЛАТНО)",
        cart_shipping_paid: "Курьером (по тарифам службы доставки)",
        cart_total: "Всего",
        btn_checkout: "Оформить заказ",
        showroom_title: "Шоурум в Варне",
        showroom_desc: "Приезжайте к нам, чтобы ознакомиться с образцами продукции и проконсультироваться с нашими специалистами для подбора лучших решений.",
        showroom_address: "Адрес: г. Варна, бул. Приморски 17",
        showroom_hours: "Режим работы",
        showroom_weekdays: "Понедельник - Пятница: 09:00 - 18:00",
        showroom_saturday: "Суббота: 09:30 - 14:00",
        showroom_sunday: "Воскресенье: Выходной",
        consult_header: "Консультация и индивидуальный расчет",
        form_name: "Ваше имя",
        form_phone: "Номер телефона",
        form_email: "Электронная почта",
        form_date: "Дата визита",
        form_time: "Желаемое время",
        form_msg: "Заметки / Размеры помещения",
        btn_book: "Отправить запрос",
        admin_title: "Управление инвентарем",
        admin_add_product: "Добавить / Редактировать товар",
        admin_field_name: "Название товара",
        admin_field_price: "Цена (лв.)",
        admin_field_category: "Категория",
        admin_field_material: "Материал",
        admin_field_color: "Цвет",
        admin_field_image: "URL-адрес изображения",
        admin_field_desc: "Описание товара",
        admin_btn_save: "Сохранить товар",
        admin_btn_cancel: "Отмена",
        admin_list_title: "Список активных товаров",
        admin_action_edit: "Изменить",
        admin_action_delete: "Удалить",
        toast_cart_added: "Товар успешно добавлен в корзину!",
        toast_booking_success: "Запрос отправлен! Мы свяжемся с вами в ближайшее время.",
        toast_checkout_success: "Заказ успешно оформлен. Спасибо!",
        toast_admin_add: "Товар успешно добавлен в каталог!",
        toast_admin_edit: "Изменения товара успешно сохранены!",
        toast_admin_delete: "Товар удален из каталога!"
    },
    ua: {
        nav_home: "Головна",
        nav_catalog: "Каталог",
        nav_showroom: "Шоурум Варна",
        nav_admin: "Адмін Панель",
        hero_tagline: "ПРЯМИЙ ІМПОРТ ТА ГАРАНТІЯ",
        hero_title: "Люксова плитка та повне обладнання для ванної кімнати",
        hero_desc: "Відкрийте для себе найкращі колекції плитки з Іспанії та Італії, а також елітну сантехніку, змішувачі та душові системи. Замовте безкоштовні зразки.",
        btn_explore: "Дивитись Каталог",
        btn_contact: "Зв'язатися з нами",
        section_cat_subtitle: "КРАЩІ КОЛЕКЦІЇ",
        section_cat_title: "Наші основні категорії",
        cat_tiles: "Плитка та керамограніт",
        cat_toilets: "Санітарія та унітази",
        cat_faucets: "Змішувачі",
        cat_showers: "Душові системи",
        cat_accessories: "Аксесуари для ванної",
        guarantee_1: "Професійне обслуговування та консультації",
        guarantee_2: "Швидка доставка по всій Болгарії",
        guarantee_3: "Безкоштовне зберігання на нашому складі",
        filter_title: "Фільтрація",
        filter_clear: "Очистити",
        filter_category: "Категорія",
        filter_material: "Матеріал",
        filter_color: "Колір",
        filter_price: "Ціна (лв.)",
        sort_label: "Сортування:",
        sort_featured: "Рекомендовані",
        sort_price_asc: "Ціна: від нижчої до вищої",
        sort_price_desc: "Ціна: від вищої до нижчої",
        sort_rating: "Оцінка клієнтів",
        search_placeholder: "Шукати товар за назвою, кольором...",
        price_unit: "лв.",
        box_unit: "шт. / упак.",
        btn_add_cart: "У кошик",
        btn_view_details: "Детальніше",
        calc_header: "Калькулятор упаковок",
        calc_area: "Необхідна площа (м²)",
        calc_waste: "Запас на підрізку (рекомендується 10%)",
        calc_boxes_needed: "Необхідна кількість/коробки:",
        calc_total_price: "Загальна сума:",
        cart_title: "Кошик",
        cart_empty: "Ваш кошик порожній",
        cart_subtotal: "Підсумок",
        cart_shipping: "Доставка",
        cart_shipping_free: "Самовивіз зі складу Варна (БЕЗКОШТОВНО)",
        cart_shipping_paid: "Кур'єром (за тарифами доставки)",
        cart_total: "Всього",
        btn_checkout: "Оформити замовлення",
        showroom_title: "Шоурум у Варні",
        showroom_desc: "Завітайте до нас, щоб ознайомитися зі зразками продукції та проконсультуватися з нашими фахівцями для вибору найкращих рішень.",
        showroom_address: "Адреса: м. Варна, бул. Приморски 17",
        showroom_hours: "Режим роботи",
        showroom_weekdays: "Понеділок - П'ятниця: 09:00 - 18:00",
        showroom_saturday: "Субота: 09:30 - 14:00",
        showroom_sunday: "Неділя: Вихідний",
        consult_header: "Консультація та індивідуальний розрахунок",
        form_name: "Ваше ім'я",
        form_phone: "Номер телефону",
        form_email: "Електронна пошта",
        form_date: "Дата візиту",
        form_time: "Бажаний час",
        form_msg: "Примітки / Розміри приміщення",
        btn_book: "Надіслати запит",
        admin_title: "Управління інвентарем",
        admin_add_product: "Додати / Редагувати товар",
        admin_field_name: "Назва товару",
        admin_field_price: "Ціна (лв.)",
        admin_field_category: "Категорія",
        admin_field_material: "Матеріал",
        admin_field_color: "Колір",
        admin_field_image: "URL-адреса зображення",
        admin_field_desc: "Опис товару",
        admin_btn_save: "Зберегти товар",
        admin_btn_cancel: "Скасувати",
        admin_list_title: "Список активних товарів",
        admin_action_edit: "Редагувати",
        admin_action_delete: "Видалити",
        toast_cart_added: "Товар додано в кошик успішно!",
        toast_booking_success: "Запит надіслано! Ми зв'яжемося з вами найближчим часом.",
        toast_checkout_success: "Замовлення успішно оформлено. Дякуємо!",
        toast_admin_add: "Товар успішно додано до каталогу!",
        toast_admin_edit: "Зміни товару збережено успішно!",
        toast_admin_delete: "Товар видалено з каталогу!"
    },
    es: {
        nav_home: "Inicio",
        nav_catalog: "Catálogo",
        nav_showroom: "Showroom Varna",
        nav_admin: "Panel Admin",
        hero_tagline: "IMPORTACIÓN DIRECTA & GARANTÍA",
        hero_title: "Azulejos de Lujo y Equipamiento de Baño Completo",
        hero_desc: "Descubra colecciones de azulejos premium importadas directamente de España e Italia, junto con sanitarios, grifería y sistemas de ducha de gama alta. Pida muestras.",
        btn_explore: "Ver Catálogo",
        btn_contact: "Contacto",
        section_cat_subtitle: "COLECCIONES EXCLUSIVAS",
        section_cat_title: "Nuestras Categorías Principales",
        cat_tiles: "Azulejos & Porcelánicos",
        cat_toilets: "Sanitarios & Inodoros",
        cat_faucets: "Grifería & Accesorios",
        cat_showers: "Sistemas de Ducha",
        cat_accessories: "Accesorios de Baño",
        guarantee_1: "Asesoramiento y servicio al cliente profesional",
        guarantee_2: "Envío rápido a toda Bulgaria",
        guarantee_3: "Opción de almacenamiento en nuestro almacén",
        filter_title: "Filtros",
        filter_clear: "Limpiar todo",
        filter_category: "Categoría",
        filter_material: "Material",
        filter_color: "Color",
        filter_price: "Precio (BGN)",
        sort_label: "Ordenar por:",
        sort_featured: "Destacados",
        sort_price_asc: "Precio: Menor a Mayor",
        sort_price_desc: "Precio: Mayor a Menor",
        sort_rating: "Valoración de Clientes",
        search_placeholder: "Buscar en el catálogo por nombre, color...",
        price_unit: "BGN",
        box_unit: "uds / caja",
        btn_add_cart: "Comprar cajas",
        btn_view_details: "Ver Detalles",
        calc_header: "Calculadora de Cajas",
        calc_area: "Área requerida (m²)",
        calc_waste: "Factor de desperdicio (10% recomendado)",
        calc_boxes_needed: "Cajas/unidades necesarias:",
        calc_total_price: "Precio Total:",
        cart_title: "Carrito",
        cart_empty: "Su carrito está vacío",
        cart_subtotal: "Subtotal",
        cart_shipping: "Envío",
        cart_shipping_free: "Recogida en almacén de Varna (GRATIS)",
        cart_shipping_paid: "Por mensajería (se aplican tarifas)",
        cart_total: "Total",
        btn_checkout: "Finalizar Compra",
        showroom_title: "Showroom de Varna",
        showroom_desc: "Visítenos en persona para ver nuestras muestras y consultar con nuestro equipo de diseño las mejores soluciones para su hogar.",
        showroom_address: "Dirección: Varna, bul. Primorski 17",
        showroom_hours: "Horario de Apertura",
        showroom_weekdays: "Lunes - Viernes: 09:00 - 18:00",
        showroom_saturday: "Sábado: 09:30 - 14:00",
        showroom_sunday: "Domingo: Cerrado",
        consult_header: "Solicitud de Asesoramiento o Presupuesto",
        form_name: "Su nombre",
        form_phone: "Número de teléfono",
        form_email: "Correo electrónico",
        form_date: "Fecha deseada",
        form_time: "Hora",
        form_msg: "Notas / Dimensiones del espacio",
        btn_book: "Enviar Solicitud",
        admin_title: "Gestión de Inventario",
        admin_add_product: "Añadir / Editar Producto",
        admin_field_name: "Nombre del producto",
        admin_field_price: "Precio (BGN)",
        admin_field_category: "Categoría",
        admin_field_material: "Material",
        admin_field_color: "Color",
        admin_field_image: "URL de la imagen",
        admin_field_desc: "Descripción del artículo",
        admin_btn_save: "Guardar Producto",
        admin_btn_cancel: "Cancelar",
        admin_list_title: "Lista de Productos Activos",
        admin_action_edit: "Editar",
        admin_action_delete: "Eliminar",
        toast_cart_added: "¡Producto añadido al carrito!",
        toast_booking_success: "¡Solicitud enviada! Nos pondremos en contacto pronto.",
        toast_checkout_success: "Su pedido se ha realizado correctamente. ¡Gracias!",
        toast_admin_add: "¡Producto añadido correctamente al catálogo!",
        toast_admin_edit: "¡Cambios guardados correctamente!",
        toast_admin_delete: "¡Producto eliminado del catálogo!"
    },
    it: {
        nav_home: "Home",
        nav_catalog: "Catalogo",
        nav_showroom: "Showroom Varna",
        nav_admin: "Pannello Admin",
        hero_tagline: "IMPORTAZIONE DIRETTA & GARANZIA",
        hero_title: "Piastrelle di Lusso e Arredo Bagno Completo",
        hero_desc: "Scopri le migliori collezioni di piastrelle importate direttamente da Spagna e Italia, oltre a sanitari, miscelatori e soffioni doccia di fascia alta. Richiedi campioni.",
        btn_explore: "Sfoglia Catalogo",
        btn_contact: "Contattaci",
        section_cat_subtitle: "COLLEZIONI ESCLUSIVE",
        section_cat_title: "Le Nostre Categorie Principali",
        cat_tiles: "Piastrelle & Ceramica",
        cat_toilets: "Sanitari & Vasi",
        cat_faucets: "Miscelatori & Rubinetteria",
        cat_showers: "Soffioni & Colonne Doccia",
        cat_accessories: "Accessori Bagno",
        guarantee_1: "Assistenza clienti e consulenza professionale",
        guarantee_2: "Spedizione rapida in tutta la Bulgaria",
        guarantee_3: "Opzione di stoccaggio gratuito nel nostro magazzino",
        filter_title: "Filtri",
        filter_clear: "Cancella tutto",
        filter_category: "Categoria",
        filter_material: "Materiale",
        filter_color: "Colore",
        filter_price: "Prezzo (BGN)",
        sort_label: "Ordina per:",
        sort_featured: "In Evidenza",
        sort_price_asc: "Prezzo: dal più basso",
        sort_price_desc: "Prezzo: dal più alto",
        sort_rating: "Valutazione Clienti",
        search_placeholder: "Cerca nel catalogo per nome, colore...",
        price_unit: "BGN",
        box_unit: "pz / scatola",
        btn_add_cart: "Aggiungi al Carrello",
        btn_view_details: "Dettagli",
        calc_header: "Calcolo Confezioni",
        calc_area: "Superficie richiesta (m²)",
        calc_waste: "Tolleranza taglio (10% raccomandato)",
        calc_boxes_needed: "Scatole/pezzi necessari:",
        calc_total_price: "Prezzo Totale:",
        cart_title: "Carrello",
        cart_empty: "Il tuo carrello è vuoto",
        cart_subtotal: "Totale parziale",
        cart_shipping: "Spedizione",
        cart_shipping_free: "Ritiro in showroom Varna (GRATUITO)",
        cart_shipping_paid: "Con corriere (tariffe applicate)",
        cart_total: "Totale",
        btn_checkout: "Procedi all'Ordine",
        showroom_title: "Showroom di Varna",
        showroom_desc: "Vieni a trovarci in sede per visionare i campioni e ricevere una consulenza dedicata per la scelta delle soluzioni migliori per la tua casa.",
        showroom_address: "Indirizzo: Varna, bul. Primorski 17",
        showroom_hours: "Orari di Apertura",
        showroom_weekdays: "Lunedì - Venerdì: 09:00 - 18:00",
        showroom_saturday: "Sabato: 09:30 - 14:00",
        showroom_sunday: "Domenica: Chiuso",
        consult_header: "Richiesta Consulenza o Preventivo",
        form_name: "Il tuo nome",
        form_phone: "Numero di telefono",
        form_email: "Indirizzo e-mail",
        form_date: "Data desiderata",
        form_time: "Fascia oraria",
        form_msg: "Note / Dimensioni del locale",
        btn_book: "Invia Richiesta",
        admin_title: "Gestione Magazzino",
        admin_add_product: "Aggiungi / Modifica Articolo",
        admin_field_name: "Nome prodotto",
        admin_field_price: "Prezzo (BGN)",
        admin_field_category: "Categoria",
        admin_field_material: "Materiale",
        admin_field_color: "Colore",
        admin_field_image: "URL dell'immagine",
        admin_field_desc: "Descrizione dell'articolo",
        admin_btn_save: "Salva Prodotto",
        admin_btn_cancel: "Annulla",
        admin_list_title: "Articoli in Catalogo",
        admin_action_edit: "Modifica",
        admin_action_delete: "Elimina",
        toast_cart_added: "Articolo aggiunto al carrello!",
        toast_booking_success: "Richiesta inviata! Ti contatteremo a breve.",
        toast_checkout_success: "Ordine completato con successo. Grazie!",
        toast_admin_add: "Articolo aggiunto al catalogo!",
        toast_admin_edit: "Modifiche salvate con successo!",
        toast_admin_delete: "Articolo eliminato dal catalogo!"
    }
};

class AppController {
    constructor() {
        this.currentLang = 'bg';
        this.cart = [];
        this.activeTab = 'home';
        this.editingProductId = null;
        
        // Active catalog filter states
        this.activeFilters = {
            search: '',
            category: 'all',
            material: [],
            color: [],
            minPrice: 0,
            maxPrice: 1000,
            sortBy: 'featured'
        };

        this.activeDetailTile = null;
        this.currentWasteFactor = 10; // Default 10%
    }

    init() {
        // Load custom blacklist for deleted default products
        this.hiddenProductIds = JSON.parse(localStorage.getItem('plochkite_hidden_products') || '[]');

        this.bindEvents();
        this.switchTab('home');
        this.renderCatalog();
        this.renderAdminProductList();
        this.translatePage();
        this.updateCartUI();
    }

    bindEvents() {
        // Tab switching
        document.querySelectorAll('[data-target-tab]').forEach(el => {
            el.addEventListener('click', (e) => {
                const tabId = e.currentTarget.getAttribute('data-target-tab');
                this.switchTab(tabId);
            });
        });

        // Language toggle buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });

        // Sidebar filters
        const searchInput = document.getElementById('search-catalog');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.activeFilters.search = e.target.value;
                this.renderCatalog();
            });
        }

        const sortSelect = document.getElementById('sort-catalog');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.activeFilters.sortBy = e.target.value;
                this.renderCatalog();
            });
        }

        // Multi-checkbox filters
        document.querySelectorAll('.filter-checkbox input').forEach(cb => {
            cb.addEventListener('change', () => {
                const filterGroup = cb.name; // 'material', 'color'
                const val = cb.value;
                if (cb.checked) {
                    this.activeFilters[filterGroup].push(val);
                } else {
                    this.activeFilters[filterGroup] = this.activeFilters[filterGroup].filter(item => item !== val);
                }
                this.renderCatalog();
            });
        });

        // Price filters
        const minPriceInput = document.getElementById('price-min');
        const maxPriceInput = document.getElementById('price-max');
        const applyPriceBtn = document.getElementById('apply-price');
        if (applyPriceBtn && minPriceInput && maxPriceInput) {
            applyPriceBtn.addEventListener('click', () => {
                this.activeFilters.minPrice = parseFloat(minPriceInput.value) || 0;
                this.activeFilters.maxPrice = parseFloat(maxPriceInput.value) || 1000;
                this.renderCatalog();
            });
        }

        // Clear filters
        const clearBtn = document.getElementById('clear-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.resetFilters();
            });
        }

        // Modals & Drawers
        const closeModalBtn = document.getElementById('close-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => this.toggleModal(false));
        }
        
        const openCartBtn = document.getElementById('open-cart');
        if (openCartBtn) {
            openCartBtn.addEventListener('click', () => this.toggleCartDrawer(true));
        }

        const closeCartBtn = document.getElementById('close-cart');
        if (closeCartBtn) {
            closeCartBtn.addEventListener('click', () => this.toggleCartDrawer(false));
        }

        const cartOverlay = document.getElementById('cart-overlay');
        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => this.toggleCartDrawer(false));
        }

        // Checkout Button
        const checkoutBtn = document.getElementById('cart-checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                if (this.cart.length === 0) return;
                this.showToast(this.getTranslation('toast_checkout_success'), 'success');
                this.cart = [];
                this.updateCartUI();
                this.toggleCartDrawer(false);
            });
        }

        // Calculator live bindings
        const areaInput = document.getElementById('calc-area-input');
        if (areaInput) {
            areaInput.addEventListener('input', () => this.recalculateTileModal());
        }

        document.querySelectorAll('.waste-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.waste-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentWasteFactor = parseInt(e.target.getAttribute('data-waste'));
                this.recalculateTileModal();
            });
        });

        // Modal Action buttons
        const modalBuyBtn = document.getElementById('modal-buy-btn');
        if (modalBuyBtn) {
            modalBuyBtn.addEventListener('click', () => {
                if (!this.activeDetailTile) return;
                const qtyInput = document.getElementById('modal-qty-boxes');
                const boxes = parseInt(qtyInput.value) || 1;
                this.addToCart(this.activeDetailTile, boxes, false);
                this.toggleModal(false);
            });
        }

        // Inquiry / Consultation Booking Form Submit
        const bookingForm = document.getElementById('consultation-booking-form');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showToast(this.getTranslation('toast_booking_success'), 'success');
                bookingForm.reset();
            });
        }

        // Admin panel form submissions
        const productForm = document.getElementById('admin-product-form');
        if (productForm) {
            productForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveProductFromAdminForm();
            });
        }

        const cancelAdminBtn = document.getElementById('admin-btn-cancel');
        if (cancelAdminBtn) {
            cancelAdminBtn.addEventListener('click', () => {
                this.resetAdminForm();
            });
        }
    }

    switchTab(tabId) {
        this.activeTab = tabId;
        
        // Update nav UI
        document.querySelectorAll('.nav-link').forEach(el => {
            el.classList.remove('active');
            if (el.getAttribute('data-target-tab') === tabId) {
                el.classList.add('active');
            }
        });

        // Hide/Show page sections
        document.querySelectorAll('.page-section').forEach(el => {
            el.classList.remove('active');
        });
        
        const activeSection = document.getElementById(`section-${tabId}`);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        this.translatePage();
        this.renderCatalog();
        this.renderAdminProductList();
        this.updateCartUI();
        if (this.activeDetailTile) {
            this.repopulateModalContent();
        }
    }

    translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (el.tagName === 'INPUT' && el.type === 'text') {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
    }

    getTranslation(key) {
        return TRANSLATIONS[this.currentLang][key] || key;
    }

    resetFilters() {
        this.activeFilters = {
            search: '',
            category: 'all',
            material: [],
            color: [],
            minPrice: 0,
            maxPrice: 1000,
            sortBy: 'featured'
        };

        // Reset DOM elements
        const searchInput = document.getElementById('search-catalog');
        if (searchInput) searchInput.value = '';
        
        const sortSelect = document.getElementById('sort-catalog');
        if (sortSelect) sortSelect.value = 'featured';

        const minPriceInput = document.getElementById('price-min');
        const maxPriceInput = document.getElementById('price-max');
        if (minPriceInput) minPriceInput.value = '';
        if (maxPriceInput) maxPriceInput.value = '';

        document.querySelectorAll('.filter-checkbox input').forEach(cb => {
            cb.checked = false;
        });

        this.renderCatalog();
    }

    // Load dynamic product database (including custom added items, excluding blacklisted deleted items)
    getActiveCatalog() {
        const allProducts = window.getProducts();
        return allProducts.filter(p => !this.hiddenProductIds.includes(p.id));
    }

    renderCatalog() {
        const grid = document.getElementById('catalog-grid');
        if (!grid) return;

        const currentCatalog = this.getActiveCatalog();

        // Filter and Sort data
        let filteredTiles = currentCatalog.filter(tile => {
            // Category check
            if (this.activeFilters.category !== 'all' && tile.category !== this.activeFilters.category) {
                return false;
            }
            // Search text check
            if (this.activeFilters.search) {
                const searchLower = this.activeFilters.search.toLowerCase();
                const nameText = tile.name[this.currentLang] || tile.name['en'] || '';
                const nameMatch = nameText.toLowerCase().includes(searchLower);
                
                const descText = tile.description[this.currentLang] || tile.description['en'] || '';
                const descMatch = descText.toLowerCase().includes(searchLower);
                
                const matMatch = tile.material.toLowerCase().includes(searchLower);
                const colorMatch = tile.color.toLowerCase().includes(searchLower);
                if (!nameMatch && !descMatch && !matMatch && !colorMatch) {
                    return false;
                }
            }
            // Material check
            if (this.activeFilters.material.length > 0 && !this.activeFilters.material.includes(tile.material)) {
                return false;
            }
            // Color check
            if (this.activeFilters.color.length > 0 && !this.activeFilters.color.includes(tile.color)) {
                return false;
            }
            // Price range check
            if (tile.price < this.activeFilters.minPrice || tile.price > this.activeFilters.maxPrice) {
                return false;
            }
            return true;
        });

        // Sorting
        if (this.activeFilters.sortBy === 'price_asc') {
            filteredTiles.sort((a, b) => a.price - b.price);
        } else if (this.activeFilters.sortBy === 'price_desc') {
            filteredTiles.sort((a, b) => b.price - a.price);
        } else if (this.activeFilters.sortBy === 'rating') {
            filteredTiles.sort((a, b) => b.rating - a.rating);
        }

        // Update count text
        const countText = document.getElementById('results-count-text');
        if (countText) {
            countText.innerText = `${filteredTiles.length} ${this.currentLang === 'bg' ? 'артикула' : 'products'}`;
        }

        // Render cards
        if (filteredTiles.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
                ${this.currentLang === 'bg' ? 'Няма намерени продукти по избраните критерии.' : 'No products found matching the criteria.'}
            </div>`;
            return;
        }

        grid.innerHTML = filteredTiles.map(tile => {
            const tileName = tile.name[this.currentLang] || tile.name['en'];
            const countryVal = tile.country ? (tile.country[this.currentLang] || tile.country['en']) : '';
            const matTranslation = this.currentLang === 'bg' ? 
                (tile.material === 'porcelain' ? 'Гранитогрес' : tile.material === 'ceramic' ? 'Керамика' : 'Месинг/Сантехника') : tile.material;

            const displayPrice = tile.price.toFixed(2);

            return `
                <div class="product-card">
                    ${tile.rating >= 4.9 ? `<div class="product-card-badge"><span class="badge badge-accent">Best Seller</span></div>` : ''}
                    <div class="product-image-wrapper" onclick="window.app.openProductModal('${tile.id}')">
                        <img src="${tile.image}" alt="${tileName}" onerror="this.src='assets/tiles/hero.png'">
                        <div class="product-hover-overlay">
                            <button class="btn btn-accent btn-ghost">${this.getTranslation('btn_view_details')}</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-category">${matTranslation} ${countryVal ? '• ' + countryVal : ''}</span>
                        <h3 class="product-title" onclick="window.app.openProductModal('${tile.id}')">${tileName}</h3>
                        <div class="product-meta">
                            <div class="product-rating">
                                <svg viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <span>${tile.rating || '4.5'}</span>
                            </div>
                        </div>
                        <div class="product-footer">
                            <div class="product-price-wrapper">
                                <span class="price-value">${displayPrice} ${this.getTranslation('price_unit')}</span>
                                <span class="price-unit">${tile.category === 'tiles' ? 'лв. / м²' : 'лв. / бр.'}</span>
                            </div>
                            <div class="card-actions">
                                <button class="card-btn card-btn-primary" onclick="window.app.quickAddCart('${tile.id}')" title="Купи">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    setCategoryFilter(category) {
        this.activeFilters.category = category;
        
        // Highlight active sub-header button
        document.querySelectorAll('.cat-pill').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-cat') === category) {
                btn.classList.add('active');
            }
        });

        this.renderCatalog();
        this.switchTab('catalog');
    }

    // Modal Actions
    openProductModal(tileId) {
        const currentCatalog = this.getActiveCatalog();
        const tile = currentCatalog.find(t => t.id === tileId);
        if (!tile) return;
        this.activeDetailTile = tile;

        this.repopulateModalContent();
        
        // Reset calculator inputs
        document.getElementById('calc-area-input').value = '';
        this.currentWasteFactor = 10;
        document.querySelectorAll('.waste-btn').forEach(b => {
            b.classList.remove('active');
            if (parseInt(b.getAttribute('data-waste')) === 10) b.classList.add('active');
        });
        
        this.recalculateTileModal();
        this.toggleModal(true);
    }

    repopulateModalContent() {
        const tile = this.activeDetailTile;
        if (!tile) return;

        const tileName = tile.name[this.currentLang] || tile.name['en'];
        const countryVal = tile.country ? (tile.country[this.currentLang] || tile.country['en']) : '';
        const matVal = this.currentLang === 'bg' ? 
            (tile.material === 'porcelain' ? 'Гранитогрес' : tile.material === 'ceramic' ? 'Керамика' : 'Санитарен фаянс') : tile.material;

        document.getElementById('modal-title').innerText = tileName;
        
        const descText = tile.description[this.currentLang] || tile.description['en'] || '';
        document.getElementById('modal-desc').innerText = descText;
        
        const isTiles = tile.category === 'tiles';
        const priceSuffix = isTiles ? `лв. / м²` : `лв. / бр.`;
        document.getElementById('modal-price').innerText = `${tile.price.toFixed(2)} ${priceSuffix}`;
        
        const packLabel = isTiles ? 
            (this.currentLang === 'bg' ? `Размер на пакет: ${tile.boxSize} м²` : `Box size: ${tile.boxSize} sq.m`) :
            (this.currentLang === 'bg' ? `Индивидуално опаковано` : `Single item package`);
        document.getElementById('modal-box-info').innerText = packLabel;
        
        document.getElementById('modal-img').src = tile.image;
        document.getElementById('modal-img').onerror = function() {
            this.src = 'assets/tiles/hero.png';
        };

        // Specifications list
        document.getElementById('spec-material').innerText = matVal;
        document.getElementById('spec-origin').innerText = countryVal || 'Europe';

        // Toggle visibility of tile calculator depending on whether it's tile or general bathroom equipment
        const calcWrapper = document.querySelector('.tile-calculator');
        if (calcWrapper) {
            if (isTiles) {
                calcWrapper.style.display = 'block';
            } else {
                calcWrapper.style.display = 'none';
            }
        }
    }

    recalculateTileModal() {
        const tile = this.activeDetailTile;
        if (!tile) return;

        const areaVal = parseFloat(document.getElementById('calc-area-input').value) || 0;
        const result = window.calculateTileRequirement(areaVal, tile.boxSize || 1.0, this.currentWasteFactor, tile.price);

        // Update output nodes
        document.getElementById('calc-total-area-val').innerText = `${result.totalSqM} м²`;
        document.getElementById('calc-boxes-needed-val').innerText = `${result.boxesNeeded} ${this.getTranslation('box_unit')}`;
        document.getElementById('calc-total-price-val').innerText = `${result.totalCost.toFixed(2)} лв.`;
        
        // Sync boxes to Buy Input
        document.getElementById('modal-qty-boxes').value = result.boxesNeeded || 1;
    }

    toggleModal(isOpen) {
        const modal = document.getElementById('product-modal');
        if (modal) {
            if (isOpen) modal.classList.add('active');
            else modal.classList.remove('active');
        }
    }

    // Shopping Cart Drawer & Logic
    quickAddCart(tileId) {
        const currentCatalog = this.getActiveCatalog();
        const tile = currentCatalog.find(t => t.id === tileId);
        if (tile) {
            this.addToCart(tile, 1, false);
        }
    }

    addToCart(tile, quantity, isSample = false) {
        const existingItem = this.cart.find(item => item.tile.id === tile.id && item.isSample === isSample);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({ tile, quantity, isSample });
        }

        this.updateCartUI();
        this.toggleCartDrawer(true);
        
        this.showToast(this.getTranslation('toast_cart_added'), 'success');
    }

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.updateCartUI();
    }

    updateCartQty(index, newQty) {
        if (newQty <= 0) {
            this.removeFromCart(index);
            return;
        }
        this.cart[index].quantity = newQty;
        this.updateCartUI();
    }

    updateCartUI() {
        // Update header icon counts
        const totalItemsCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(countEl => {
            countEl.innerText = totalItemsCount;
            countEl.style.display = totalItemsCount > 0 ? 'flex' : 'none';
        });

        // Populate drawer items
        const cartList = document.getElementById('cart-items');
        if (!cartList) return;

        if (this.cart.length === 0) {
            cartList.innerHTML = `<div class="cart-empty-msg">${this.getTranslation('cart_empty')}</div>`;
            document.getElementById('cart-subtotal-val').innerText = '0.00 лв.';
            document.getElementById('cart-total-val').innerText = '0.00 лв.';
            return;
        }

        let subtotal = 0;
        cartList.innerHTML = this.cart.map((item, index) => {
            const tileName = item.tile.name[this.currentLang] || item.tile.name['en'];
            const isTiles = item.tile.category === 'tiles';
            
            let itemPrice = 0;
            let pricingLabel = '';
            
            if (isTiles) {
                const itemArea = item.quantity * item.tile.boxSize;
                itemPrice = itemArea * item.tile.price;
                pricingLabel = `${item.quantity} ${this.getTranslation('box_unit')} (${itemArea.toFixed(2)} м²)`;
            } else {
                itemPrice = item.quantity * item.tile.price;
                pricingLabel = `${item.quantity} бр.`;
            }
            
            subtotal += itemPrice;

            return `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${item.tile.image}" alt="${tileName}" onerror="this.src='assets/tiles/hero.png'">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${tileName}</h4>
                        <p class="cart-item-pricing">${pricingLabel}</p>
                        <div class="cart-item-totals">
                            <div class="item-qty-selector">
                                <button class="item-qty-btn" onclick="window.app.updateCartQty(${index}, ${item.quantity - 1})">-</button>
                                <input type="text" class="item-qty-input" value="${item.quantity}" readonly>
                                <button class="item-qty-btn" onclick="window.app.updateCartQty(${index}, ${item.quantity + 1})">+</button>
                            </div>
                            <span class="item-total-price">${itemPrice.toFixed(2)} лв.</span>
                        </div>
                        <button class="remove-item-btn" onclick="window.app.removeFromCart(${index})">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                            ${this.currentLang === 'bg' ? 'Премахни' : 'Remove'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Subtotal and Shipping Calculations
        document.getElementById('cart-subtotal-val').innerText = `${subtotal.toFixed(2)} лв.`;
        
        const shippingType = document.getElementById('shipping-method')?.value || 'showroom';
        let shippingCost = 0;
        
        const shippingLabelEl = document.getElementById('cart-shipping-val');
        if (shippingLabelEl) {
            if (shippingType === 'showroom') {
                shippingLabelEl.innerText = this.getTranslation('cart_shipping_free');
            } else {
                shippingCost = subtotal > 1000 ? 0 : 50; // Free shipping on large orders over 1000 BGN
                shippingLabelEl.innerText = shippingCost === 0 ? 
                    (this.currentLang === 'bg' ? 'БЕЗПЛАТНА' : 'FREE') : 
                    `${shippingCost.toFixed(2)} лв.`;
            }
        }

        const totalCost = subtotal + shippingCost;
        document.getElementById('cart-total-val').innerText = `${totalCost.toFixed(2)} лв.`;
    }

    toggleCartDrawer(isOpen) {
        const overlay = document.getElementById('cart-overlay');
        const drawer = document.getElementById('cart-drawer');
        if (overlay && drawer) {
            if (isOpen) {
                overlay.classList.add('active');
                drawer.style.transform = 'translateX(0)';
            } else {
                overlay.classList.remove('active');
                drawer.style.transform = 'translateX(100%)';
            }
        }
    }

    // ============================================
    // ADMIN DASHBOARD CRUD ACTIONS
    // ============================================

    renderAdminProductList() {
        const adminListContainer = document.getElementById('admin-product-list-body');
        if (!adminListContainer) return;

        const currentCatalog = this.getActiveCatalog();

        if (currentCatalog.length === 0) {
            adminListContainer.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--color-text-muted); padding: 2rem;">No items in the catalog.</td></tr>`;
            return;
        }

        adminListContainer.innerHTML = currentCatalog.map(product => {
            const nameText = product.name[this.currentLang] || product.name['en'] || 'N/A';
            const priceSuffix = product.category === 'tiles' ? 'лв. / м²' : 'лв. / бр.';
            return `
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--color-border-warm);">
                        <img src="${product.image}" alt="" style="width: 48px; height: 48px; object-fit: cover; border-radius: 4px;" onerror="this.src='assets/tiles/hero.png'">
                    </td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--color-border-warm); font-weight: 600;">${nameText}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--color-border-warm); text-transform: capitalize;">${product.category}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--color-border-warm); font-weight: 700; color: var(--color-accent-dark);">${product.price.toFixed(2)} ${priceSuffix}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--color-border-warm); text-align: right;">
                        <button class="btn btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; margin-right: 0.25rem;" onclick="window.app.editProduct('${product.id}')">${this.getTranslation('admin_action_edit')}</button>
                        <button class="btn btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; border-color: var(--color-error); color: var(--color-error);" onclick="window.app.deleteProduct('${product.id}')">${this.getTranslation('admin_action_delete')}</button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    saveProductFromAdminForm() {
        const nameVal = document.getElementById('prod-name').value;
        const priceVal = parseFloat(document.getElementById('prod-price').value);
        const categoryVal = document.getElementById('prod-category').value;
        const materialVal = document.getElementById('prod-material').value;
        const colorVal = document.getElementById('prod-color').value;
        const imageVal = document.getElementById('prod-image').value || 'assets/tiles/hero.png';
        const descVal = document.getElementById('prod-desc').value;

        // Custom list from localStorage
        const customData = localStorage.getItem('plochkite_custom_products');
        let customList = customData ? JSON.parse(customData) : [];

        if (this.editingProductId) {
            // EDITING PRODUCT
            const allProducts = window.getProducts();
            const originalProduct = allProducts.find(p => p.id === this.editingProductId);
            
            const updatedProduct = {
                id: this.editingProductId,
                category: categoryVal,
                price: priceVal,
                boxSize: categoryVal === 'tiles' ? (originalProduct?.boxSize || 1.44) : 1.0,
                material: materialVal,
                color: colorVal,
                rating: originalProduct?.rating || 4.8,
                country: originalProduct?.country || { bg: "Испания", en: "Spain" },
                image: imageVal,
                name: originalProduct?.name || {},
                description: originalProduct?.description || {}
            };

            // Set current language values, default English if empty
            updatedProduct.name[this.currentLang] = nameVal;
            updatedProduct.name['en'] = updatedProduct.name['en'] || nameVal;
            updatedProduct.description[this.currentLang] = descVal;
            updatedProduct.description['en'] = updatedProduct.description['en'] || descVal;

            // Check if it's a default product we are editing
            const isDefault = DEFAULT_PRODUCTS.some(p => p.id === this.editingProductId);
            if (isDefault) {
                // If editing a default product, we remove it from default list representation 
                // by saving it in the custom list (which overrides default)
                customList = customList.filter(p => p.id !== this.editingProductId);
                customList.push(updatedProduct);
            } else {
                // Update in custom list
                customList = customList.map(p => p.id === this.editingProductId ? updatedProduct : p);
            }

            window.saveCustomProducts(customList);
            this.showToast(this.getTranslation('toast_admin_edit'), 'success');
        } else {
            // NEW PRODUCT ADDITION
            const newId = 'custom-' + Date.now();
            const newProduct = {
                id: newId,
                category: categoryVal,
                price: priceVal,
                boxSize: categoryVal === 'tiles' ? 1.44 : 1.0,
                material: materialVal,
                color: colorVal,
                rating: 4.8,
                country: {
                    bg: "България", en: "Bulgaria", ru: "Болгария", ua: "Болгарія", es: "Bulgaria", it: "Bulgaria"
                },
                name: {},
                description: {},
                image: imageVal
            };

            // Populate multi-language name/desc maps with the input string as fallback
            const langs = ['bg', 'en', 'ru', 'ua', 'es', 'it'];
            langs.forEach(lang => {
                newProduct.name[lang] = nameVal;
                newProduct.description[lang] = descVal;
            });

            customList.push(newProduct);
            window.saveCustomProducts(customList);
            this.showToast(this.getTranslation('toast_admin_add'), 'success');
        }

        // Refresh database reference
        window.TILE_CATALOG = window.getProducts();

        this.resetAdminForm();
        this.renderCatalog();
        this.renderAdminProductList();
    }

    editProduct(productId) {
        const currentCatalog = this.getActiveCatalog();
        const product = currentCatalog.find(p => p.id === productId);
        if (!product) return;

        this.editingProductId = productId;
        
        // Populate inputs
        document.getElementById('prod-name').value = product.name[this.currentLang] || product.name['en'] || '';
        document.getElementById('prod-price').value = product.price;
        document.getElementById('prod-category').value = product.category;
        document.getElementById('prod-material').value = product.material;
        document.getElementById('prod-color').value = product.color;
        document.getElementById('prod-image').value = product.image;
        document.getElementById('prod-desc').value = product.description[this.currentLang] || product.description['en'] || '';

        // Highlight form title
        document.getElementById('admin-form-legend').innerText = this.currentLang === 'bg' ? 'Редактиране на артикул' : 'Edit Catalog Item';
        document.getElementById('admin-btn-cancel').style.display = 'inline-flex';

        // Scroll to form
        document.getElementById('admin-product-form').scrollIntoView({ behavior: 'smooth' });
    }

    deleteProduct(productId) {
        if (!confirm(this.currentLang === 'bg' ? 'Сигурни ли сте, че искате да изтриете този артикул?' : 'Are you sure you want to delete this product?')) {
            return;
        }

        const isDefault = DEFAULT_PRODUCTS.some(p => p.id === productId);
        
        if (isDefault) {
            // Default product: add to blacklist hidden IDs
            if (!this.hiddenProductIds.includes(productId)) {
                this.hiddenProductIds.push(productId);
                localStorage.setItem('plochkite_hidden_products', JSON.stringify(this.hiddenProductIds));
            }
            // Remove from custom list edits just in case it was edited before
            let customData = localStorage.getItem('plochkite_custom_products');
            if (customData) {
                let customList = JSON.parse(customData);
                customList = customList.filter(p => p.id !== productId);
                window.saveCustomProducts(customList);
            }
        } else {
            // Custom product: remove from custom list
            let customData = localStorage.getItem('plochkite_custom_products');
            if (customData) {
                let customList = JSON.parse(customData);
                customList = customList.filter(p => p.id !== productId);
                window.saveCustomProducts(customList);
            }
        }

        // Refresh database reference
        window.TILE_CATALOG = window.getProducts();

        this.showToast(this.getTranslation('toast_admin_delete'), 'success');
        this.renderCatalog();
        this.renderAdminProductList();
    }

    resetAdminForm() {
        this.editingProductId = null;
        document.getElementById('admin-product-form').reset();
        document.getElementById('admin-form-legend').innerText = this.getTranslation('admin_add_product');
        document.getElementById('admin-btn-cancel').style.display = 'none';
    }

    // Dynamic Toast alerts
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-box');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type} active`;
        toast.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>${message}</span>
        `;
        
        container.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.classList.remove('active');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }
}

// Instantiate and bind
window.addEventListener('DOMContentLoaded', () => {
    window.app = new AppController();
    window.app.init();
});
