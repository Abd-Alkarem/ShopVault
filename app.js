/* ============================================
   SHOPVAULT — APPLICATION LOGIC (V2)
   ============================================ */

// ============ DATA STORE ============
const DataStore = {
    _key: (k) => `shopvault_${k}`,
    defaults: {
        products: [
            { id: 1, name: 'Wireless Headphones Pro', sku: 'WHP-001', brand: 'SoundMax', country: 'USA', price: 149.99, cost: 89.99, category: 'Electronics', stock: 45, sold: 12, image: '', description: 'Premium noise-cancelling wireless headphones with 30hr battery life.', emoji: '🎧', notes: [] },
            { id: 2, name: 'Smart Watch Ultra', sku: 'SWU-002', brand: 'TechWear', country: 'Japan', price: 299.99, cost: 180.00, category: 'Electronics', stock: 28, sold: 8, image: '', description: 'Advanced fitness tracking with AMOLED display and GPS.', emoji: '⌚', notes: [] },
            { id: 3, name: 'Leather Messenger Bag', sku: 'LMB-003', brand: 'CraftHouse', country: 'Italy', price: 89.99, cost: 42.00, category: 'Fashion', stock: 62, sold: 20, image: '', description: 'Handcrafted genuine leather bag with laptop compartment.', emoji: '👜', notes: [] },
            { id: 4, name: 'Organic Coffee Blend', sku: 'OCB-004', brand: 'BrewCo', country: 'Colombia', price: 24.99, cost: 12.50, category: 'Food & Drinks', stock: 150, sold: 85, image: '', description: 'Single-origin Arabica beans, medium roast. 500g pack.', emoji: '☕', notes: [] },
            { id: 5, name: 'Minimalist Desk Lamp', sku: 'MDL-005', brand: 'LumiDesign', country: 'Sweden', price: 59.99, cost: 28.00, category: 'Home', stock: 5, sold: 15, image: '', description: 'Touch-controlled LED desk lamp with 5 brightness levels.', emoji: '💡', notes: [] },
            { id: 6, name: 'Running Shoes Elite', sku: 'RSE-006', brand: 'SpeedRun', country: 'Germany', price: 129.99, cost: 65.00, category: 'Fashion', stock: 34, sold: 22, image: '', description: 'Lightweight performance running shoes with cushioned sole.', emoji: '👟', notes: [] },
            { id: 7, name: 'Portable Bluetooth Speaker', sku: 'PBS-007', brand: 'SoundMax', country: 'USA', price: 79.99, cost: 38.00, category: 'Electronics', stock: 3, sold: 30, image: '', description: 'Waterproof 360° sound with 20hr battery.', emoji: '🔊', notes: [] },
            { id: 8, name: 'Ceramic Plant Pot Set', sku: 'CPP-008', brand: 'GreenLife', country: 'China', price: 34.99, cost: 15.00, category: 'Home', stock: 88, sold: 10, image: '', description: 'Set of 3 modern ceramic pots in matte finish.', emoji: '🪴', notes: [] },
            { id: 9, name: 'Stainless Steel Water Bottle', sku: 'SSW-009', brand: 'HydroMax', country: 'USA', price: 19.99, cost: 8.50, category: 'Accessories', stock: 200, sold: 50, image: '', description: 'Double-wall insulated 750ml bottle.', emoji: '🧊', notes: [] },
            { id: 10, name: 'Wireless Charging Pad', sku: 'WCP-010', brand: 'TechWear', country: 'South Korea', price: 39.99, cost: 18.00, category: 'Electronics', stock: 72, sold: 18, image: '', description: 'Fast 15W Qi wireless charger.', emoji: '🔋', notes: [] },
            { id: 11, name: 'Yoga Mat Premium', sku: 'YMP-011', brand: 'ZenFit', country: 'India', price: 44.99, cost: 20.00, category: 'Fitness', stock: 55, sold: 25, image: '', description: 'Non-slip eco-friendly mat, 6mm thick.', emoji: '🧘', notes: [] },
            { id: 12, name: 'Gourmet Tea Collection', sku: 'GTC-012', brand: 'LeafArt', country: 'Sri Lanka', price: 29.99, cost: 14.00, category: 'Food & Drinks', stock: 0, sold: 40, image: '', description: 'Curated box of 12 premium loose-leaf teas.', emoji: '🍵', notes: [] },
        ],
        sales: [
            { id: 1, productId: 1, productName: 'Wireless Headphones Pro', sku: 'WHP-001', quantity: 2, unitPrice: 149.99, total: 299.98, buyerName: 'Alice Johnson', buyerPhone: '+1 555-0101', buyerEmail: 'alice@email.com', buyerAddress: '123 Main St, NY', createdBy: 'admin', date: '2026-02-20T10:30:00' },
            { id: 2, productId: 4, productName: 'Organic Coffee Blend', sku: 'OCB-004', quantity: 5, unitPrice: 24.99, total: 124.95, buyerName: 'Bob Smith', buyerPhone: '+1 555-0202', buyerEmail: 'bob@email.com', buyerAddress: '456 Oak Ave, LA', createdBy: 'admin', date: '2026-02-21T14:15:00' },
            { id: 3, productId: 6, productName: 'Running Shoes Elite', sku: 'RSE-006', quantity: 1, unitPrice: 129.99, total: 129.99, buyerName: 'Carol White', buyerPhone: '', buyerEmail: 'carol@email.com', buyerAddress: '', createdBy: 'admin', date: '2026-02-22T09:00:00' },
            { id: 4, productId: 2, productName: 'Smart Watch Ultra', sku: 'SWU-002', quantity: 1, unitPrice: 299.99, total: 299.99, buyerName: 'David Lee', buyerPhone: '+1 555-0404', buyerEmail: '', buyerAddress: '789 Pine Rd, Chicago', createdBy: 'admin', date: '2026-02-23T11:45:00' },
        ],
        stock_movements: [
            { id: 1, productId: 1, change: -2, reason: 'sale', reference: 'Sale #1', date: '2026-02-20T10:30:00', user: 'admin' },
            { id: 2, productId: 4, change: -5, reason: 'sale', reference: 'Sale #2', date: '2026-02-21T14:15:00', user: 'admin' },
            { id: 3, productId: 6, change: -1, reason: 'sale', reference: 'Sale #3', date: '2026-02-22T09:00:00', user: 'admin' },
            { id: 4, productId: 2, change: -1, reason: 'sale', reference: 'Sale #4', date: '2026-02-23T11:45:00', user: 'admin' },
            { id: 5, productId: 7, change: 20, reason: 'refill', reference: 'Refill #1', date: '2026-02-19T08:00:00', user: 'admin' },
            { id: 6, productId: 5, change: 10, reason: 'refill', reference: 'Refill #2', date: '2026-02-18T16:00:00', user: 'admin' },
        ],
        stock_refills: [
            { id: 1, productId: 7, productName: 'Portable Bluetooth Speaker', quantity: 20, notes: 'Restocked from supplier', date: '2026-02-19T08:00:00', user: 'admin' },
            { id: 2, productId: 5, productName: 'Minimalist Desk Lamp', quantity: 10, notes: 'Emergency restock', date: '2026-02-18T16:00:00', user: 'admin' },
        ],
        users: [
            { id: 1, username: 'owner', fullName: 'Store Owner', role: 'owner', isOwner: true, createdAt: '2025-11-01' },
            { id: 2, username: 'admin', fullName: 'Admin User', role: 'admin', isOwner: false, createdAt: '2025-12-01' },
        ],
        login_history: [
            { id: 1, userId: 2, username: 'admin', ip: '127.0.0.1', userAgent: 'Chrome/120', date: '2026-02-23T15:00:00' },
        ],
        customers: [
            { id: 1, name: 'Alice Johnson', email: 'alice@email.com', spent: 649.93, joined: '2025-11-15' },
            { id: 2, name: 'Bob Smith', email: 'bob@email.com', spent: 899.97, joined: '2025-12-02' },
            { id: 3, name: 'Carol White', email: 'carol@email.com', spent: 219.98, joined: '2026-01-10' },
            { id: 4, name: 'David Lee', email: 'david@email.com', spent: 154.97, joined: '2026-01-28' },
            { id: 5, name: 'Eva Martinez', email: 'eva@email.com', spent: 359.94, joined: '2026-02-05' },
        ],
        orders: [
            { id: 1001, customer: 'Alice Johnson', email: 'alice@email.com', items: [{ productId: 1, qty: 1 }, { productId: 4, qty: 2 }], total: 199.97, status: 'delivered', date: '2026-02-20' },
            { id: 1002, customer: 'Bob Smith', email: 'bob@email.com', items: [{ productId: 2, qty: 1 }], total: 299.99, status: 'shipped', date: '2026-02-21' },
            { id: 1003, customer: 'Carol White', email: 'carol@email.com', items: [{ productId: 3, qty: 1 }, { productId: 6, qty: 1 }], total: 219.98, status: 'pending', date: '2026-02-22' },
        ],
        settings: { storeName: 'ShopVault', currency: '$', lowStockThreshold: 10, theme: 'light' },
        cart: [],
    },

    get(key) {
        const raw = localStorage.getItem(this._key(key));
        if (raw) return JSON.parse(raw);
        const def = this.defaults[key];
        if (def !== undefined) { this.set(key, def); return JSON.parse(JSON.stringify(def)); }
        return null;
    },
    set(key, value) { localStorage.setItem(this._key(key), JSON.stringify(value)); },
    nextId(key) { const items = this.get(key) || []; return items.length ? Math.max(...items.map(i => i.id)) + 1 : 1; },

    // Products
    addProduct(p) { const ps = this.get('products'); p.id = this.nextId('products'); p.sold = 0; p.notes = p.notes || []; ps.push(p); this.set('products', ps); return p; },
    updateProduct(id, u) { const ps = this.get('products'); const i = ps.findIndex(p => p.id === id); if (i === -1) return null; ps[i] = { ...ps[i], ...u }; this.set('products', ps); return ps[i]; },
    deleteProduct(id) { this.set('products', this.get('products').filter(p => p.id !== id)); },
    addProductNote(id, note) { const ps = this.get('products'); const p = ps.find(x => x.id === id); if (p) { p.notes = p.notes || []; p.notes.unshift(note); this.set('products', ps); } },

    // Sales
    createSale(sale) {
        const sales = this.get('sales'); sale.id = this.nextId('sales'); sale.date = new Date().toISOString(); sales.push(sale); this.set('sales', sales);
        // deduct stock
        const ps = this.get('products'); const p = ps.find(x => x.id === sale.productId);
        if (p) { p.stock = Math.max(0, p.stock - sale.quantity); p.sold = (p.sold || 0) + sale.quantity; this.set('products', ps); }
        // log movement
        this.addMovement(sale.productId, -sale.quantity, 'sale', `Sale #${sale.id}`);
        return sale;
    },
    deleteSale(id) {
        const sales = this.get('sales'); const sale = sales.find(s => s.id === id); if (!sale) return;
        this.set('sales', sales.filter(s => s.id !== id));
        const ps = this.get('products'); const p = ps.find(x => x.id === sale.productId);
        if (p) { p.stock += sale.quantity; p.sold = Math.max(0, (p.sold || 0) - sale.quantity); this.set('products', ps); }
        this.addMovement(sale.productId, sale.quantity, 'adjust', `Sale #${id} deleted`);
    },

    // Stock
    addMovement(productId, change, reason, reference) {
        const mvs = this.get('stock_movements'); mvs.push({ id: this.nextId('stock_movements'), productId, change, reason, reference, date: new Date().toISOString(), user: 'admin' }); this.set('stock_movements', mvs);
    },
    createRefill(r) {
        const refs = this.get('stock_refills'); const ps = this.get('products'); const p = ps.find(x => x.id === r.productId);
        r.id = this.nextId('stock_refills'); r.date = new Date().toISOString(); r.user = 'admin'; r.productName = p ? p.name : 'Unknown';
        refs.push(r); this.set('stock_refills', refs);
        if (p) { p.stock += r.quantity; this.set('products', ps); }
        this.addMovement(r.productId, r.quantity, 'refill', `Refill #${r.id}`);
        return r;
    },
    getRefillsForProduct(pid) { return (this.get('stock_refills') || []).filter(r => r.productId === pid); },
    getStockStats() {
        const ps = this.get('products'); const t = this.get('settings').lowStockThreshold || 10;
        return { totalProducts: ps.length, totalStock: ps.reduce((s, p) => s + p.stock, 0), lowStock: ps.filter(p => p.stock > 0 && p.stock <= t).length, outOfStock: ps.filter(p => p.stock === 0).length };
    },

    // Users
    addUser(u) { const us = this.get('users'); u.id = this.nextId('users'); u.createdAt = new Date().toISOString().split('T')[0]; us.push(u); this.set('users', us); return u; },
    deleteUser(id) { this.set('users', this.get('users').filter(u => u.id !== id)); },
    addLoginEntry(entry) { const h = this.get('login_history'); entry.id = this.nextId('login_history'); entry.date = new Date().toISOString(); h.push(entry); this.set('login_history', h); },
    getUserMovements(userId) {
        const u = this.get('users').find(x => x.id === userId); if (!u) return [];
        return (this.get('stock_movements') || []).filter(m => m.user === u.username);
    },

    // Dashboard Analytics
    getAnalytics(period, year, month, day) {
        const sales = this.get('sales'); const ps = this.get('products'); const mvs = this.get('stock_movements'); const sets = this.get('settings');
        const cur = sets.currency || '$'; const t = sets.lowStockThreshold || 10;
        // Filter sales by period
        const filtered = sales.filter(s => { const d = new Date(s.date); if (period === 'year') return d.getFullYear() === year; if (period === 'month') return d.getFullYear() === year && d.getMonth() + 1 === month; if (period === 'day') return d.getFullYear() === year && d.getMonth() + 1 === month && d.getDate() === day; return true; });
        const revenue = filtered.reduce((s, x) => s + x.total, 0);
        const cost = filtered.reduce((s, x) => { const p = ps.find(pr => pr.id === x.productId); return s + ((p ? (p.cost || 0) : 0) * x.quantity); }, 0);
        const profit = revenue - cost; const margin = revenue > 0 ? Math.round(profit / revenue * 100) : 0;
        const unitsSold = filtered.reduce((s, x) => s + x.quantity, 0);
        const totalStock = ps.reduce((s, p) => s + p.stock, 0); const lowStockCount = ps.filter(p => p.stock > 0 && p.stock <= t).length;
        // Sales trend
        const byDate = {}; filtered.forEach(s => { const d = s.date.split('T')[0]; byDate[d] = (byDate[d] || 0) + s.quantity; });
        const salesTrend = Object.entries(byDate).sort((a, b) => a[0].localeCompare(b[0])).map(([date, units]) => ({ date, units }));
        // Top products
        const soldMap = {}; filtered.forEach(s => { soldMap[s.productId] = (soldMap[s.productId] || { units: 0, revenue: 0 }); soldMap[s.productId].units += s.quantity; soldMap[s.productId].revenue += s.total; });
        const topProducts = Object.entries(soldMap).sort((a, b) => b[1].units - a[1].units).slice(0, 5).map(([pid, d]) => { const p = ps.find(x => x.id === Number(pid)); return { id: Number(pid), name: p ? p.name : 'Unknown', sku: p ? (p.sku || '') : '', brand: p ? (p.brand || '') : '', units_sold: d.units, revenue: d.revenue }; });
        // Movements by reason
        const fmvs = mvs.filter(m => { const d = new Date(m.date); if (period === 'year') return d.getFullYear() === year; if (period === 'month') return d.getFullYear() === year && d.getMonth() + 1 === month; if (period === 'day') return d.getFullYear() === year && d.getMonth() + 1 === month && d.getDate() === day; return true; });
        const byReason = {}; fmvs.forEach(m => { byReason[m.reason] = byReason[m.reason] || { count: 0, total_units: 0 }; byReason[m.reason].count++; byReason[m.reason].total_units += Math.abs(m.change); });
        const movementsByReason = Object.entries(byReason).map(([reason, d]) => ({ reason, ...d }));
        return { summary: { revenue, profit, profitMargin: margin, unitsSold, totalStock, lowStockCount, totalProducts: ps.length }, salesTrend, topProducts, movementsByReason };
    },

    // Orders & Cart & Settings
    updateOrderStatus(id, status) { const os = this.get('orders'); const i = os.findIndex(o => o.id === id); if (i !== -1) { os[i].status = status; this.set('orders', os); } },
    getSettings() { return this.get('settings'); },
    saveSettings(s) { this.set('settings', s); },
    getCart() { return this.get('cart') || []; },
    saveCart(c) { this.set('cart', c); },
    resetAll() { Object.keys(this.defaults).forEach(k => localStorage.removeItem(this._key(k))); }
};

// ============ TOAST ============
function showToast(message, type = 'success') {
    const c = document.getElementById('toastContainer'); if (!c) return;
    const icons = { success: '✅', danger: '❌', info: 'ℹ️' };
    const t = document.createElement('div'); t.className = `toast toast-${type}`;
    t.innerHTML = `<span class="toast-icon">${icons[type] || '✅'}</span><span class="toast-message">${message}</span>`;
    c.appendChild(t); setTimeout(() => { t.classList.add('toast-out'); setTimeout(() => t.remove(), 300); }, 3000);
}

// ============ STOREFRONT ============
const StoreFront = {
    cart: [],
    init() { this.cart = DataStore.getCart(); this.renderProducts(); this.setupCart(); this.setupFilters(); this.updateCartBadge(); this.applyTheme(); },
    applyTheme() { const s = DataStore.getSettings(); if (s && s.theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark'); },
    renderProducts(filter = 'all', sort = 'default', search = '') {
        const grid = document.getElementById('productGrid'); if (!grid) return;
        let products = DataStore.get('products') || []; const settings = DataStore.getSettings();
        const catFilter = document.getElementById('categoryFilter');
        if (catFilter && catFilter.options.length <= 1) { [...new Set(products.map(p => p.category))].forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; catFilter.appendChild(o); }); }
        if (filter !== 'all') products = products.filter(p => p.category === filter);
        if (search) { const q = search.toLowerCase(); products = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || (p.brand && p.brand.toLowerCase().includes(q))); }
        if (sort === 'price-low') products.sort((a, b) => a.price - b.price); else if (sort === 'price-high') products.sort((a, b) => b.price - a.price); else if (sort === 'name') products.sort((a, b) => a.name.localeCompare(b.name));
        grid.innerHTML = products.map(p => {
            const sc = p.stock <= 0 ? 'badge-danger' : p.stock <= (settings.lowStockThreshold || 10) ? 'badge-warning' : 'badge-success';
            const st = p.stock <= 0 ? 'Out of Stock' : p.stock <= (settings.lowStockThreshold || 10) ? `Low Stock (${p.stock})` : 'In Stock';
            const img = p.image ? `<img src="${p.image}" alt="${p.name}"/>` : `<span style="font-size:4rem;">${p.emoji || '📦'}</span>`;
            const brandLine = p.brand ? `<span style="color:var(--text-muted);font-size:0.75rem;margin-left:4px;">${p.brand}</span>` : '';
            return `<div class="product-card"><div class="product-img">${img}<span class="product-stock-badge badge ${sc}">${st}</span></div><div class="product-info"><div class="product-category">${p.category}${brandLine}</div><h3 class="product-name">${p.name}</h3><div class="product-price">${settings.currency || '$'}${p.price.toFixed(2)}</div><div class="product-actions"><button class="btn btn-primary btn-sm" onclick="StoreFront.addToCart(${p.id})" ${p.stock <= 0 ? 'disabled style="opacity:0.5;pointer-events:none;"' : ''}><i class="fas fa-cart-plus"></i> Add to Cart</button></div></div></div>`;
        }).join('');
        if (!products.length) grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-icon">🔍</div><h3>No products found</h3></div>`;
    },
    setupFilters() {
        const cf = document.getElementById('categoryFilter'), sf = document.getElementById('sortFilter'), si = document.getElementById('searchInput');
        if (cf) cf.addEventListener('change', () => this.applyFilters()); if (sf) sf.addEventListener('change', () => this.applyFilters());
        if (si) { let d; si.addEventListener('input', () => { clearTimeout(d); d = setTimeout(() => this.applyFilters(), 300); }); }
    },
    applyFilters() { this.renderProducts(document.getElementById('categoryFilter')?.value || 'all', document.getElementById('sortFilter')?.value || 'default', document.getElementById('searchInput')?.value || ''); },
    setupCart() {
        const toggle = document.getElementById('cartToggle'), overlay = document.getElementById('cartOverlay'), close = document.getElementById('cartClose'), cont = document.getElementById('cartContinue');
        const openCart = () => { document.getElementById('cartSidebar')?.classList.add('active'); overlay?.classList.add('active'); this.renderCart(); };
        const closeCart = () => { document.getElementById('cartSidebar')?.classList.remove('active'); overlay?.classList.remove('active'); };
        toggle?.addEventListener('click', openCart); overlay?.addEventListener('click', closeCart); close?.addEventListener('click', closeCart); cont?.addEventListener('click', closeCart);
        document.getElementById('checkoutBtn')?.addEventListener('click', () => {
            if (!this.cart.length) return; const products = DataStore.get('products'); let total = 0;
            this.cart.forEach(ci => {
                const p = products.find(pr => pr.id === ci.productId); if (p) {
                    total += p.price * ci.qty;
                    DataStore.createSale({ productId: p.id, productName: p.name, sku: p.sku || '', quantity: ci.qty, unitPrice: p.price, total: p.price * ci.qty, buyerName: 'Guest Customer', buyerPhone: '', buyerEmail: '', buyerAddress: '', createdBy: 'storefront' });
                }
            });
            this.cart = []; DataStore.saveCart(this.cart); this.renderCart(); this.updateCartBadge(); this.renderProducts(); closeCart(); showToast('Order placed successfully! 🎉', 'success');
        });
    },
    addToCart(pid) {
        const ps = DataStore.get('products'), p = ps.find(x => x.id === pid); if (!p || p.stock <= 0) return;
        const e = this.cart.find(c => c.productId === pid);
        if (e) { if (e.qty < p.stock) e.qty++; else { showToast('Maximum stock reached!', 'info'); return; } } else this.cart.push({ productId: pid, qty: 1 });
        DataStore.saveCart(this.cart); this.updateCartBadge(); showToast(`${p.name} added to cart`, 'success');
    },
    updateCartQty(pid, delta) {
        const i = this.cart.findIndex(c => c.productId === pid); if (i === -1) return;
        this.cart[i].qty += delta; if (this.cart[i].qty <= 0) this.cart.splice(i, 1);
        DataStore.saveCart(this.cart); this.renderCart(); this.updateCartBadge();
    },
    removeFromCart(pid) { this.cart = this.cart.filter(c => c.productId !== pid); DataStore.saveCart(this.cart); this.renderCart(); this.updateCartBadge(); },
    renderCart() {
        const c = document.getElementById('cartItems'), f = document.getElementById('cartFooter'); if (!c) return;
        const ps = DataStore.get('products'), s = DataStore.getSettings();
        if (!this.cart.length) { c.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3></div>`; if (f) f.style.display = 'none'; return; }
        if (f) f.style.display = 'block'; let total = 0;
        c.innerHTML = this.cart.map(ci => {
            const p = ps.find(pr => pr.id === ci.productId); if (!p) return ''; total += p.price * ci.qty;
            return `<div class="cart-item"><div class="cart-item-img">${p.emoji || '📦'}</div><div class="cart-item-info"><div class="cart-item-name">${p.name}</div><div class="cart-item-price">${s.currency || '$'}${p.price.toFixed(2)}</div><div class="cart-item-controls"><button class="qty-btn" onclick="StoreFront.updateCartQty(${p.id},-1)">−</button><span class="cart-item-qty">${ci.qty}</span><button class="qty-btn" onclick="StoreFront.updateCartQty(${p.id},1)">+</button></div></div><button class="cart-item-remove" onclick="StoreFront.removeFromCart(${p.id})"><i class="fas fa-trash-alt"></i></button></div>`;
        }).join('');
        const te = document.getElementById('cartTotalPrice'); if (te) te.textContent = `${s.currency || '$'}${total.toFixed(2)}`;
    },
    updateCartBadge() { const b = document.getElementById('cartBadge'); if (!b) return; const c = this.cart.reduce((s, x) => s + x.qty, 0); b.textContent = c; b.style.display = c > 0 ? 'flex' : 'none'; },
};

// ============ ADMIN DASHBOARD ============
const AdminDashboard = {
    currentPanel: 'overview', editingProductId: null, chartInstance: null,
    periodState: { period: 'month', year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },

    init() {
        if (sessionStorage.getItem('shopvault_admin') !== 'true') { window.location.href = 'login.html'; return; }
        const u = sessionStorage.getItem('shopvault_user') || 'admin';
        DataStore.addLoginEntry({ userId: 2, username: u, ip: '127.0.0.1', userAgent: navigator.userAgent.slice(0, 80) });
        this.applyTheme(); this.setupSidebar(); this.showPanel('overview'); this.setupLogout(); this.setupMobileMenu();
    },
    applyTheme() { const s = DataStore.getSettings(); if (s && s.theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark'); else document.documentElement.removeAttribute('data-theme'); },
    setupMobileMenu() { const b = document.getElementById('mobileMenuBtn'), s = document.querySelector('.sidebar'); if (b && s) b.addEventListener('click', () => s.classList.toggle('mobile-open')); },
    setupSidebar() { document.querySelectorAll('.sidebar-item[data-panel]').forEach(i => i.addEventListener('click', () => this.showPanel(i.getAttribute('data-panel')))); },
    setupLogout() { document.getElementById('logoutBtn')?.addEventListener('click', () => { sessionStorage.removeItem('shopvault_admin'); window.location.href = 'login.html'; }); },

    showPanel(panel) {
        this.currentPanel = panel;
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        document.querySelector(`.sidebar-item[data-panel="${panel}"]`)?.classList.add('active');
        document.querySelectorAll('.dashboard-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(`panel-${panel}`)?.classList.add('active');
        const titles = { overview: 'Dashboard Overview', products: 'Products', 'add-product': 'Add Product', sales: 'Sales', stock: 'Stock Management', orders: 'Orders', customers: 'Customers', settings: 'Settings', users: 'User Management' };
        const subs = { overview: "Welcome back! Here's what's happening.", products: 'Manage your product inventory', 'add-product': 'Add a new product', sales: 'Record and track sales', stock: 'Manage stock levels and refills', orders: 'Track and manage orders', customers: 'Your customer base', settings: 'Configure your store', users: 'Manage admin accounts' };
        const ht = document.getElementById('panelTitle'), hs = document.getElementById('panelSubtitle');
        if (ht) ht.textContent = titles[panel] || panel; if (hs) hs.textContent = subs[panel] || '';
        this.renderPanel(panel);
    },
    renderPanel(p) {
        const fn = { overview: () => this.renderOverview(), products: () => this.renderProducts(), 'add-product': () => this.renderAddProduct(), sales: () => this.renderSales(), stock: () => this.renderStock(), orders: () => this.renderOrders(), customers: () => this.renderCustomers(), settings: () => this.renderSettings(), users: () => this.renderUsers() };
        if (fn[p]) fn[p]();
    },

    // ---- OVERVIEW ----
    renderOverview() {
        const ps = this.periodState; const data = DataStore.getAnalytics(ps.period, ps.year, ps.month, ps.day); const s = DataStore.getSettings(); const cur = s.currency || '$';
        document.getElementById('kpiRevenue').textContent = `${cur}${data.summary.revenue.toFixed(2)}`;
        document.getElementById('kpiProfit').textContent = `${cur}${data.summary.profit.toFixed(2)}`;
        document.getElementById('kpiProfitMargin').textContent = `${data.summary.profitMargin}% margin`;
        document.getElementById('kpiUnits').textContent = data.summary.unitsSold;
        document.getElementById('kpiStock').textContent = data.summary.totalStock;
        document.getElementById('kpiStockSub').textContent = `${data.summary.lowStockCount} low stock`;
        // Period selectors
        document.getElementById('periodSelect').value = ps.period;
        document.getElementById('yearSelect').value = ps.year;
        // Sales trend
        const trendEl = document.getElementById('salesTrendBars');
        if (trendEl) {
            const maxU = Math.max(...data.salesTrend.map(t => t.units), 1);
            trendEl.innerHTML = data.salesTrend.length ? data.salesTrend.map(t => `<div class="trend-bar-row"><span class="trend-date">${t.date}</span><div class="trend-bar-bg"><div class="trend-bar-fill" style="width:${(t.units / maxU * 100).toFixed(1)}%"></div></div><span class="trend-val">${t.units}</span></div>`).join('') : '<div class="empty-state" style="padding:24px;"><p>No sales data for this period</p></div>';
        }
        // Top products
        const topEl = document.getElementById('topProductsList');
        if (topEl) { topEl.innerHTML = data.topProducts.length ? data.topProducts.map((p, i) => `<div class="top-product-row"><div class="top-rank">${i + 1}</div><div class="top-info"><div class="top-name">${p.name}</div><div class="top-meta">${p.sku} • ${p.brand || 'N/A'}</div></div><div class="top-stats"><div class="top-units">${p.units_sold} units</div><div class="top-rev">${cur}${p.revenue.toFixed(2)}</div></div></div>`).join('') : '<div class="empty-state" style="padding:24px;"><p>No sales data</p></div>'; }
        // Movements by reason
        const mvEl = document.getElementById('movementsByReason');
        if (mvEl) {
            const colors = { sale: { bg: 'var(--success-bg)', color: 'var(--success)', icon: '🛒' }, refill: { bg: 'var(--info-bg)', color: 'var(--info)', icon: '📦' }, adjust: { bg: 'var(--warning-bg)', color: 'var(--warning)', icon: '⚙️' } };
            mvEl.innerHTML = data.movementsByReason.length ? data.movementsByReason.map(m => { const c = colors[m.reason] || { bg: 'var(--border-light)', color: 'var(--text-secondary)', icon: '📋' }; return `<div class="movement-card"><div class="movement-icon" style="background:${c.bg};color:${c.color}">${c.icon}</div><div class="movement-info"><div class="movement-reason">${m.reason}</div><div class="movement-count">${m.count} transactions</div></div><div class="movement-total"><div class="movement-units">${m.total_units}</div><div style="font-size:0.7rem;color:var(--text-muted);">units</div></div></div>`; }).join('') : '<div class="empty-state" style="padding:24px;"><p>No movements</p></div>';
        }
    },
    changePeriod(field, value) { this.periodState[field] = field === 'period' ? value : Number(value); this.renderOverview(); },

    // ---- PRODUCTS ----
    renderProducts() {
        const tbody = document.getElementById('productsTableBody'); if (!tbody) return;
        const ps = DataStore.get('products'), s = DataStore.getSettings(), cur = s.currency || '$', t = s.lowStockThreshold || 10;
        tbody.innerHTML = ps.map(p => {
            const sc = p.stock <= 0 ? 'badge-danger' : p.stock <= t ? 'badge-warning' : 'badge-success';
            const sl = p.stock <= 0 ? 'Out of Stock' : p.stock <= t ? 'Low Stock' : 'In Stock';
            const profit = ((p.price - (p.cost || 0)) * 100 / p.price).toFixed(0);
            return `<tr><td><span style="font-size:1.3rem;margin-right:8px;">${p.emoji || '📦'}</span><strong>${p.name}</strong><br><span style="font-size:0.7rem;color:var(--text-muted);">${p.sku || ''} • ${p.brand || '—'} • ${p.country || '—'}</span></td><td>${p.category}</td><td><strong>${cur}${p.price.toFixed(2)}</strong><br><span style="font-size:0.7rem;color:var(--text-muted);">Cost: ${cur}${(p.cost || 0).toFixed(2)} (${profit}%)</span></td><td><input type="number" class="stock-input" value="${p.stock}" min="0" onchange="AdminDashboard.updateStock(${p.id},this.value)"/></td><td><span class="badge ${sc}">${sl}</span></td><td style="font-weight:600;">${p.sold || 0}</td><td><div class="table-actions"><button class="btn btn-secondary btn-sm" onclick="AdminDashboard.editProduct(${p.id})"><i class="fas fa-edit"></i></button><button class="btn btn-danger btn-sm" onclick="AdminDashboard.confirmDeleteProduct(${p.id})"><i class="fas fa-trash"></i></button></div></td></tr>`;
        }).join('');
    },
    updateStock(id, val) { const v = Math.max(0, parseInt(val) || 0); const old = DataStore.get('products').find(p => p.id === id); const delta = v - (old ? old.stock : 0); DataStore.updateProduct(id, { stock: v }); if (delta !== 0) DataStore.addMovement(id, delta, 'adjust', 'Manual adjustment'); showToast('Stock updated', 'success'); },
    editProduct(id) { this.editingProductId = id; this.showPanel('add-product'); },
    confirmDeleteProduct(id) { const p = DataStore.get('products').find(x => x.id === id); if (p && confirm(`Delete "${p.name}"?`)) { DataStore.deleteProduct(id); this.renderProducts(); showToast(`"${p.name}" deleted`, 'danger'); } },

    // ---- ADD/EDIT PRODUCT ----
    renderAddProduct() {
        const isEdit = this.editingProductId !== null; let p = { name: '', sku: '', brand: '', country: '', price: '', cost: '', category: '', stock: '', image: '', description: '', emoji: '📦' };
        if (isEdit) { const f = DataStore.get('products').find(x => x.id === this.editingProductId); if (f) p = f; }
        document.getElementById('panelTitle').textContent = isEdit ? 'Edit Product' : 'Add Product';
        ['prodName', 'prodSku', 'prodBrand', 'prodCountry', 'prodPrice', 'prodCost', 'prodCategory', 'prodStock', 'prodImage', 'prodEmoji', 'prodDesc'].forEach(id => {
            const el = document.getElementById(id); if (!el) return; const key = id.replace('prod', '').toLowerCase();
            const map = { name: 'name', sku: 'sku', brand: 'brand', country: 'country', price: 'price', cost: 'cost', category: 'category', stock: 'stock', image: 'image', emoji: 'emoji', desc: 'description' };
            el.value = p[map[key]] || '';
        });
        const btn = document.getElementById('prodSubmitBtn'); if (btn) btn.innerHTML = isEdit ? '<i class="fas fa-save"></i> Update Product' : '<i class="fas fa-plus"></i> Add Product';
        // Notes
        const notesEl = document.getElementById('productNotes');
        if (notesEl && isEdit && p.notes && p.notes.length) { notesEl.style.display = 'block'; notesEl.querySelector('.notes-list').innerHTML = p.notes.map(n => `<div class="note-item"><div class="note-date">${n.date}</div><div class="note-body">${n.body}</div></div>`).join(''); }
        else if (notesEl) { notesEl.style.display = isEdit ? 'block' : 'none'; if (notesEl.querySelector('.notes-list')) notesEl.querySelector('.notes-list').innerHTML = ''; }
    },
    handleProductSubmit() {
        const g = id => document.getElementById(id)?.value?.trim() || '';
        const name = g('prodName'), sku = g('prodSku'), brand = g('prodBrand'), country = g('prodCountry'), price = parseFloat(g('prodPrice')), cost = parseFloat(g('prodCost')) || 0, category = g('prodCategory'), stock = parseInt(g('prodStock')) || 0, image = g('prodImage'), emoji = g('prodEmoji') || '📦', description = g('prodDesc');
        if (!name || isNaN(price) || !category) { showToast('Fill in name, price, and category.', 'danger'); return; }
        if (this.editingProductId !== null) { DataStore.updateProduct(this.editingProductId, { name, sku, brand, country, price, cost, category, stock, image, emoji, description }); showToast(`"${name}" updated!`, 'success'); this.editingProductId = null; }
        else { DataStore.addProduct({ name, sku, brand, country, price, cost, category, stock, image, emoji, description, notes: [] }); showToast(`"${name}" added!`, 'success'); }
        this.showPanel('products');
    },
    addNote() {
        if (!this.editingProductId) return; const body = document.getElementById('noteBody')?.value?.trim(); if (!body) return;
        DataStore.addProductNote(this.editingProductId, { date: new Date().toISOString().split('T')[0], body });
        document.getElementById('noteBody').value = ''; this.renderAddProduct(); showToast('Note added', 'success');
    },
    cancelProductForm() { this.editingProductId = null; this.showPanel('products'); },

    // ---- SALES ----
    renderSales() {
        const sales = DataStore.get('sales'), ps = DataStore.get('products'), s = DataStore.getSettings(), cur = s.currency || '$';
        // Populate product select
        const sel = document.getElementById('saleProductSelect');
        if (sel && sel.options.length <= 1) { ps.forEach(p => { const o = document.createElement('option'); o.value = p.id; o.textContent = `${p.sku} - ${p.name} (Stock: ${p.stock})`; sel.appendChild(o); }); }
        // Sales table
        const tbody = document.getElementById('salesTableBody'); if (!tbody) return;
        const q = (document.getElementById('salesSearch')?.value || '').toLowerCase();
        const filtered = q ? sales.filter(s => s.productName.toLowerCase().includes(q) || s.buyerName.toLowerCase().includes(q) || (s.sku && s.sku.toLowerCase().includes(q)) || String(s.id).includes(q)) : sales;
        tbody.innerHTML = filtered.map(s => `<tr><td><strong>#${s.id}</strong></td><td style="font-size:0.8rem;">${new Date(s.date).toLocaleDateString()}<br>${new Date(s.date).toLocaleTimeString()}</td><td><strong>${s.productName}</strong><br><span style="font-size:0.7rem;color:var(--text-muted);">${s.sku || ''}</span></td><td>${s.buyerName}${s.buyerPhone ? `<br><span style="font-size:0.7rem;color:var(--text-muted);">${s.buyerPhone}</span>` : ''}</td><td style="text-align:right;font-weight:600;">${s.quantity}</td><td style="text-align:right;">${cur}${s.unitPrice.toFixed(2)}</td><td style="text-align:right;font-weight:700;color:var(--success);">${cur}${s.total.toFixed(2)}</td><td><div class="table-actions"><button class="btn btn-secondary btn-sm" onclick="AdminDashboard.exportSaleCSV(${s.id})" title="Export"><i class="fas fa-download"></i></button><button class="btn btn-danger btn-sm" onclick="AdminDashboard.deleteSale(${s.id})" title="Delete"><i class="fas fa-trash"></i></button></div></td></tr>`).join('');
        if (!filtered.length) tbody.innerHTML = `<tr><td colspan="8" class="empty-state" style="padding:24px;">No sales found</td></tr>`;
    },
    showSaleForm() { document.getElementById('saleFormCard')?.classList.toggle('hidden'); },
    submitSale() {
        const pid = Number(document.getElementById('saleProductSelect')?.value); if (!pid) { showToast('Select a product', 'danger'); return; }
        const qty = parseInt(document.getElementById('saleQty')?.value) || 1, bn = document.getElementById('saleBuyerName')?.value?.trim();
        if (!bn) { showToast('Enter buyer name', 'danger'); return; }
        const p = DataStore.get('products').find(x => x.id === pid); if (!p) { showToast('Invalid product', 'danger'); return; }
        if (qty > p.stock) { showToast(`Only ${p.stock} in stock!`, 'danger'); return; }
        DataStore.createSale({ productId: pid, productName: p.name, sku: p.sku || '', quantity: qty, unitPrice: p.price, total: p.price * qty, buyerName: bn, buyerPhone: document.getElementById('saleBuyerPhone')?.value || '', buyerEmail: document.getElementById('saleBuyerEmail')?.value || '', buyerAddress: document.getElementById('saleBuyerAddress')?.value || '', createdBy: 'admin' });
        showToast('Sale created! 🎉', 'success'); document.getElementById('saleFormCard')?.classList.add('hidden');
        ['saleProductSelect', 'saleQty', 'saleBuyerName', 'saleBuyerPhone', 'saleBuyerEmail', 'saleBuyerAddress'].forEach(id => { const el = document.getElementById(id); if (el) el.value = id === 'saleQty' ? '1' : ''; });
        this.renderSales();
    },
    deleteSale(id) { if (confirm(`Delete sale #${id}? Stock will be restored.`)) { DataStore.deleteSale(id); this.renderSales(); showToast(`Sale #${id} deleted, stock restored`, 'info'); } },
    exportSaleCSV(id) {
        const sale = (DataStore.get('sales') || []).find(s => s.id === id); if (!sale) return;
        const csv = `Sale ID,Date,Product,SKU,Quantity,Unit Price,Total,Buyer,Phone,Email,Address\n${sale.id},"${sale.date}","${sale.productName}","${sale.sku}",${sale.quantity},${sale.unitPrice},${sale.total},"${sale.buyerName}","${sale.buyerPhone}","${sale.buyerEmail}","${sale.buyerAddress}"`;
        const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `receipt-${id}.csv`; a.click(); URL.revokeObjectURL(url); showToast('Receipt exported', 'success');
    },

    // ---- STOCK ----
    renderStock() {
        const stats = DataStore.getStockStats(), ps = DataStore.get('products'), s = DataStore.getSettings();
        document.getElementById('statTotalProducts').textContent = stats.totalProducts;
        document.getElementById('statTotalStock').textContent = stats.totalStock;
        document.getElementById('statLowStock').textContent = stats.lowStock;
        document.getElementById('statOutOfStock').textContent = stats.outOfStock;
        // Product select
        const sel = document.getElementById('refillProductSelect');
        if (sel && sel.options.length <= 1) { ps.forEach(p => { const o = document.createElement('option'); o.value = p.id; o.textContent = `${p.sku || ''} - ${p.name} (Current: ${p.stock})`; sel.appendChild(o); }); }
        // Stock table
        const tbody = document.getElementById('stockTableBody'); if (!tbody) return;
        const t = s.lowStockThreshold || 10;
        tbody.innerHTML = ps.map(p => {
            const sc = p.stock <= 0 ? 'badge-danger' : p.stock <= t ? 'badge-warning' : 'badge-success';
            const sl = p.stock <= 0 ? 'Out of Stock' : p.stock <= t ? 'Low Stock' : 'In Stock';
            const refills = DataStore.getRefillsForProduct(p.id);
            return `<tr class="stock-row" onclick="AdminDashboard.toggleRefillHistory(${p.id},this)"><td><i class="fas fa-chevron-right expand-icon"></i></td><td style="font-family:monospace;color:var(--text-muted);">${p.sku || '—'}</td><td><strong>${p.name}</strong></td><td>${p.brand || '—'}</td><td style="text-align:right;font-weight:700;color:var(--success);font-size:1.1rem;">${p.stock}</td><td style="text-align:right;">${p.sold || 0}</td><td><span class="badge ${sc}">${sl}</span></td><td style="text-align:center;"><span class="badge badge-info">${refills.length}</span></td></tr><tr class="refill-history-row" id="refill-${p.id}" style="display:none;"><td colspan="8"><div class="refill-history-content"><h4>Refill History</h4>${refills.length ? refills.map(r => `<div class="refill-entry"><span class="refill-qty">+${r.quantity} units</span><span class="refill-user">by ${r.user}</span>${r.notes ? `<span class="refill-notes">${r.notes}</span>` : ''}<span class="refill-date">${new Date(r.date).toLocaleString()}</span></div>`).join('') : '<p style="color:var(--text-muted);">No refills recorded</p>'}</div></td></tr>`;
        }).join('');
    },
    toggleRefillHistory(pid, row) {
        const el = document.getElementById(`refill-${pid}`); if (!el) return;
        const isOpen = el.style.display !== 'none'; el.style.display = isOpen ? 'none' : 'table-row';
        row.querySelector('.expand-icon')?.classList.toggle('rotated', !isOpen);
    },
    showRefillForm() { document.getElementById('refillFormCard')?.classList.toggle('hidden'); },
    submitRefill() {
        const pid = Number(document.getElementById('refillProductSelect')?.value); if (!pid) { showToast('Select a product', 'danger'); return; }
        const qty = parseInt(document.getElementById('refillQty')?.value) || 0; if (qty <= 0) { showToast('Enter valid quantity', 'danger'); return; }
        const notes = document.getElementById('refillNotes')?.value || '';
        DataStore.createRefill({ productId: pid, quantity: qty, notes });
        showToast('Refill added! 📦', 'success'); document.getElementById('refillFormCard')?.classList.add('hidden');
        ['refillProductSelect', 'refillQty', 'refillNotes'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
        this.renderStock();
    },

    // ---- ORDERS ----
    renderOrders() {
        const tbody = document.getElementById('ordersTableBody'); if (!tbody) return;
        const orders = DataStore.get('orders'), ps = DataStore.get('products'), s = DataStore.getSettings(), cur = s.currency || '$';
        tbody.innerHTML = orders.map(o => {
            const items = o.items.map(i => { const p = ps.find(pr => pr.id === i.productId); return p ? `${p.name} x${i.qty}` : `Unknown x${i.qty}`; }).join(', ');
            return `<tr><td><strong>#${o.id}</strong></td><td>${o.customer}</td><td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${items}">${items}</td><td><strong>${cur}${o.total.toFixed(2)}</strong></td><td><select class="status-select ${o.status}" onchange="AdminDashboard.changeOrderStatus(${o.id},this.value)"><option value="pending" ${o.status === 'pending' ? 'selected' : ''}>⏳ Pending</option><option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>📦 Shipped</option><option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>✅ Delivered</option></select></td><td>${o.date}</td></tr>`;
        }).join('');
    },
    changeOrderStatus(id, status) { DataStore.updateOrderStatus(id, status); this.renderOrders(); showToast(`Order #${id} → ${status}`, 'success'); },

    // ---- CUSTOMERS ----
    renderCustomers() {
        const tbody = document.getElementById('customersTableBody'); if (!tbody) return;
        const cs = DataStore.get('customers'), s = DataStore.getSettings(), cur = s.currency || '$';
        tbody.innerHTML = cs.map(c => `<tr><td><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#6C5CE7,#00CEC9);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:0.8rem;">${c.name.split(' ').map(n => n[0]).join('')}</div><div><div style="font-weight:600;">${c.name}</div><div style="font-size:0.75rem;color:var(--text-muted);">${c.email}</div></div></div></td><td><strong>${cur}${c.spent.toFixed(2)}</strong></td><td>${c.joined}</td></tr>`).join('');
    },

    // ---- SETTINGS ----
    renderSettings() {
        const s = DataStore.getSettings();
        document.getElementById('setStoreName').value = s.storeName || 'ShopVault';
        document.getElementById('setCurrency').value = s.currency || '$';
        document.getElementById('setLowStock').value = s.lowStockThreshold || 10;
        document.querySelectorAll('.theme-option').forEach(o => { o.classList.toggle('active', o.getAttribute('data-theme') === s.theme); o.onclick = () => { document.querySelectorAll('.theme-option').forEach(x => x.classList.remove('active')); o.classList.add('active'); }; });
    },
    saveSettings() {
        const storeName = document.getElementById('setStoreName')?.value?.trim() || 'ShopVault', currency = document.getElementById('setCurrency')?.value?.trim() || '$', lowStockThreshold = parseInt(document.getElementById('setLowStock')?.value) || 10;
        const themeOpt = document.querySelector('.theme-option.active'), theme = themeOpt ? themeOpt.getAttribute('data-theme') : 'light';
        DataStore.saveSettings({ storeName, currency, lowStockThreshold, theme });
        if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark'); else document.documentElement.removeAttribute('data-theme');
        showToast('Settings saved! 🎉', 'success');
    },
    resetData() { if (confirm('Reset ALL data to defaults?')) { DataStore.resetAll(); showToast('Data reset', 'info'); this.showPanel('overview'); } },

    // ---- USERS ----
    renderUsers() {
        const users = DataStore.get('users'), history = DataStore.get('login_history');
        const tbody = document.getElementById('usersTableBody'); if (!tbody) return;
        tbody.innerHTML = users.map(u => `<tr><td><strong>${u.username}</strong></td><td>${u.fullName || '—'}</td><td><span class="badge ${u.role === 'owner' ? 'badge-primary' : 'badge-info'}">${u.role}</span></td><td>${u.isOwner ? 'Yes' : 'No'}</td><td><div class="table-actions">${!u.isOwner ? `<button class="btn btn-danger btn-sm" onclick="AdminDashboard.deleteUser(${u.id})"><i class="fas fa-trash"></i></button>` : ''}</div></td></tr>`).join('');
        const ltbody = document.getElementById('loginHistoryBody'); if (!ltbody) return;
        ltbody.innerHTML = [...history].reverse().slice(0, 20).map(l => `<tr><td style="font-size:0.8rem;">${new Date(l.date).toLocaleString()}</td><td><strong>${l.username}</strong></td><td style="color:var(--text-muted);">${l.ip || '—'}</td><td style="color:var(--text-muted);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${l.userAgent || ''}">${(l.userAgent || '—').slice(0, 50)}</td></tr>`).join('');
    },
    addUserSubmit() {
        const un = document.getElementById('newUsername')?.value?.trim(), fn = document.getElementById('newFullName')?.value?.trim(), pw = document.getElementById('newPassword')?.value;
        if (!un || !pw) { showToast('Username and password required', 'danger'); return; }
        if (DataStore.get('users').find(u => u.username === un)) { showToast('Username already exists', 'danger'); return; }
        DataStore.addUser({ username: un, fullName: fn || un, role: 'admin', isOwner: false });
        showToast(`Admin "${un}" created`, 'success');['newUsername', 'newFullName', 'newPassword'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
        this.renderUsers();
    },
    deleteUser(id) { const u = DataStore.get('users').find(x => x.id === id); if (!u) return; if (u.isOwner) { showToast("Can't delete owner", 'danger'); return; } if (confirm(`Delete admin "${u.username}"?`)) { DataStore.deleteUser(id); this.renderUsers(); showToast('Admin deleted', 'danger'); } },
};

// ============ CALCULATOR ============
const Calculator = {
    display: '0', prev: null, op: null, waiting: false,
    open() { document.getElementById('calcModal')?.classList.add('active'); this.display = '0'; this.prev = null; this.op = null; this.waiting = false; this.updateDisplay(); },
    close() { document.getElementById('calcModal')?.classList.remove('active'); },
    updateDisplay() { const el = document.getElementById('calcDisplay'); if (el) el.textContent = this.display; const opEl = document.getElementById('calcOp'); if (opEl) opEl.textContent = this.op ? `${this.prev} ${this.op}` : ''; },
    digit(d) { if (this.waiting) { this.display = String(d); this.waiting = false; } else { this.display = this.display === '0' ? String(d) : this.display + d; } this.updateDisplay(); },
    decimal() { if (this.waiting) { this.display = '0.'; this.waiting = false; } else if (!this.display.includes('.')) { this.display += '.'; } this.updateDisplay(); },
    clear() { this.display = '0'; this.prev = null; this.op = null; this.waiting = false; this.updateDisplay(); },
    operation(nextOp) {
        const val = parseFloat(this.display);
        if (this.prev === null) { this.prev = val; } else if (this.op) { this.prev = this.calc(this.prev, val, this.op); this.display = String(this.prev); }
        this.waiting = true; this.op = nextOp; this.updateDisplay();
    },
    calc(a, b, op) { switch (op) { case '+': return a + b; case '-': return a - b; case '*': return a * b; case '/': return b !== 0 ? a / b : 0; case '%': return a % b; default: return b; } },
    equals() { if (this.prev !== null && this.op) { const val = parseFloat(this.display); this.display = String(this.calc(this.prev, val, this.op)); this.prev = null; this.op = null; this.waiting = true; this.updateDisplay(); } },
    toggleSign() { this.display = String(parseFloat(this.display) * -1); this.updateDisplay(); }
};
