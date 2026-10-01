import React, { useMemo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  MessageCircle,
  Search,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
  LogOut,
} from "lucide-react";

import {
  defaultProducts,
  defaultDeliveryAreas,
  defaultSettings,
  categories,
  load,
  save,
} from "./data";

const WA = (settings) =>
  String(settings.whatsapp || "").replace(/\D/g, "");

/* =========================================================
   BACKGROUND
========================================================= */

function BubbleBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <span
          key={i}
          className="absolute rounded-full border border-cyan-200/10 bg-cyan-200/5 animate-bubble"
          style={{
            left: `${i * 13}%`,
            width: i * 7,
            height: i * 7,
            animationDelay: `-${i * 1.3}s`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   HEADER
========================================================= */

function Header({ cartCount }) {
  const [open, setOpen] = useState(false);

  const nav = [
    "About",
    "Products",
    "Varieties",
    "Gallery",
    "Care",
    "How to Order",
    "Contact",
  ];

  const settings = load("settings", defaultSettings);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100/10 bg-[#031019]/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-black tracking-tight"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-green-400 text-xl">
            🐟
          </span>

          <span>
            SM <b className="text-cyan-300">Guppy Empire</b>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {nav.map((n) => (
            <a
              key={n}
              href={`/#${n.toLowerCase().replaceAll(" ", "-")}`}
              className="hover:text-cyan-300"
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="btn btn-secondary !p-3 relative"
          >
            <ShoppingCart size={18} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-cyan-300 text-xs font-black text-slate-900">
                {cartCount}
              </span>
            )}
          </Link>

          <a
            href={`https://wa.me/${WA(
              settings
            )}?text=${encodeURIComponent(
              "Hello SM Guppy Empire 👋 I would like to know more about your fish."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hidden sm:inline-flex"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>

          <button
            className="btn btn-secondary !p-3 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-2 border-t border-cyan-100/10 bg-[#031019] p-4 lg:hidden">
          {nav.map((n) => (
            <a
              key={n}
              href={`/#${n.toLowerCase().replaceAll(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 hover:bg-white/5"
            >
              {n}
            </a>
          ))}

          <Link to="/cart" className="btn btn-primary mt-2">
            View Cart
          </Link>
        </nav>
      )}
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const settings = load("settings", defaultSettings);

  return (
    <section className="fish-bg relative flex min-h-[650px] items-center overflow-hidden">
      <BubbleBg />

      <div className="container relative px-4 py-24">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-100/5 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Healthy fish • WhatsApp ordering
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-7xl">
            SM <span className="text-cyan-300">Guppy Empire</span>
          </h1>

          <p className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
            Premium Guppies • Healthy Fish • Beautiful Aquariums
          </p>

          <p className="mt-5 max-w-2xl text-slate-300">
            Discover beautiful, healthy and carefully selected guppies for
            beginners, hobbyists and breeders. Browse the collection and send
            your order directly through WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn btn-primary">
              <ShoppingCart size={18} />
              Browse Fish
            </a>

            <a
              href={`https://wa.me/${WA(
                settings
              )}?text=${encodeURIComponent(
                "Hello SM Guppy Empire 👋 I would like to place an enquiry."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({ c }) {
  return (
    <a
      href="#products"
      className="glass group rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-300/30"
    >
      <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-cyan-300/10 text-3xl">
        {c[2]}
      </div>

      <h3 className="font-bold">{c[0]}</h3>

      <p className="mt-2 text-sm text-slate-400">{c[1]}</p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cyan-300">
        View Products <ArrowRight size={15} />
      </span>
    </a>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ p, onAdd, onOpen }) {
  const [qty, setQty] = useState(1);

  const sold = p.stock <= 0;

  return (
    <article className="glass overflow-hidden rounded-3xl">
      <button
        onClick={() => onOpen(p)}
        className="block w-full text-left"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />

          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
              sold
                ? "bg-red-500/90"
                : "bg-green-400/90 text-slate-950"
            }`}
          >
            {sold ? "SOLD OUT" : `${p.stock} in stock`}
          </span>
        </div>
      </button>

      <div className="p-5">
        <div className="text-xs uppercase tracking-wider text-cyan-300">
          {p.variety}
        </div>

        <h3 className="mt-1 text-lg font-black">{p.name}</h3>

        <p className="mt-2 min-h-10 text-sm text-slate-400">
          {p.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <b className="text-xl">₹{p.price}</b>

          <div className="flex items-center gap-1 rounded-xl border border-white/10">
            <button
              disabled={sold}
              onClick={(e) => {
                e.stopPropagation();
                setQty(Math.max(1, qty - 1));
              }}
              className="p-2"
            >
              <Minus size={15} />
            </button>

            <span className="w-6 text-center text-sm">{qty}</span>

            <button
              disabled={sold}
              onClick={(e) => {
                e.stopPropagation();
                setQty(Math.min(p.stock, qty + 1));
              }}
              className="p-2"
            >
              <Plus size={15} />
            </button>
          </div>
        </div>

        <button
          disabled={sold}
          onClick={() => onAdd(p, qty)}
          className="btn btn-primary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShoppingCart size={17} />
          {sold ? "Sold Out" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   PRODUCTS
========================================================= */

function Products({ products, onAdd, onOpen }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        cat === "All" || p.category === cat;

      const searchText =
        `${p.name} ${p.variety} ${p.description}`.toLowerCase();

      const matchesSearch = searchText.includes(
        q.toLowerCase()
      );

      return matchesCategory && matchesSearch;
    });
  }, [products, q, cat]);

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
              The collection
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Find your next guppy
            </h2>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-3 text-slate-500"
              />

              <input
                className="input pl-10"
                placeholder="Search fish..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <select
              className="input sm:w-48"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option value="All">All</option>

              {categories.map((c) => (
                <option key={c[0]} value={c[0]}>
                  {c[0]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              onAdd={onAdd}
              onOpen={onOpen}
            />
          ))}
        </div>

        {!filtered.length && (
          <div className="py-20 text-center text-slate-400">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   PRODUCT MODAL
========================================================= */

function ProductModal({ p, onClose, onAdd }) {
  if (!p) return null;

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="glass max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          <img
            src={p.image}
            alt={p.name}
            className="h-full min-h-72 w-full object-cover"
          />

          <div className="p-6">
            <button
              onClick={onClose}
              className="float-right rounded-full bg-white/5 p-2"
            >
              <X size={18} />
            </button>

            <p className="text-sm uppercase text-cyan-300">
              {p.variety}
            </p>

            <h2 className="mt-1 text-3xl font-black">
              {p.name}
            </h2>

            <p className="mt-4 text-slate-300">
              {p.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/5 p-3">
                Size
                <br />
                <b>{p.size}</b>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                Age
                <br />
                <b>{p.age}</b>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                Breeding
                <br />
                <b>{p.breeding ? "Yes" : "No"}</b>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                Care
                <br />
                <b>{p.care}</b>
              </div>
            </div>

            <div className="mt-6 text-2xl font-black">
              ₹{p.price}
            </div>

            <button
              disabled={p.stock <= 0}
              onClick={() => {
                onAdd(p, 1);
                onClose();
              }}
              className="btn btn-primary mt-5 w-full disabled:opacity-40"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   INFORMATION SECTIONS
========================================================= */

function InfoSections() {
  return (
    <>
      <section id="about" className="section">
        <div className="container grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
              About us
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Healthy fish. Happy aquariums.
            </h2>

            <p className="mt-5 text-slate-300">
              SM Guppy Empire is a guppy fish farm focused on providing
              healthy, beautiful and quality guppies for aquarium hobbyists
              and breeders.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Healthy Fish",
              "Quality Varieties",
              "Carefully Maintained",
              "Customer Support",
              "WhatsApp Ordering",
            ].map((x) => (
              <div
                className="glass rounded-2xl p-5"
                key={x}
              >
                <ShieldCheck className="text-cyan-300" />

                <p className="mt-3 font-bold">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="varieties" className="section bg-black/10">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            Guppy varieties
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Colorful choices
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Blue Moscow",
              "Red Dragon",
              "Full Red",
              "Cobra",
              "Galaxy",
              "Dumbo Ear",
              "Mixed Fancy",
              "Selected Pair",
            ].map((x, i) => (
              <div
                className="glass overflow-hidden rounded-3xl"
                key={x}
              >
                <img
                  src={
                    defaultProducts[
                      i % defaultProducts.length
                    ].image
                  }
                  alt={x}
                  className="aspect-square w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold">{x}</h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Healthy selected stock. Price varies by grade
                    and availability.
                  </p>

                  <a
                    href="#products"
                    className="mt-3 inline-block text-sm font-bold text-cyan-300"
                  >
                    Order Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="care" className="section">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            Beginner guide
          </p>

          <h2 className="mt-2 text-4xl font-black">
            How to care for guppies
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Aquarium setup",
                "Use a clean cycled tank with gentle filtration and hiding places.",
              ],
              [
                "Water quality",
                "Keep water clean, stable and free from sudden parameter changes.",
              ],
              [
                "Temperature",
                "Maintain a stable tropical temperature suitable for guppies.",
              ],
              [
                "Feeding",
                "Offer small portions of quality food and avoid overfeeding.",
              ],
              [
                "Tank mates",
                "Choose peaceful community fish with compatible size and temperament.",
              ],
              [
                "Breeding",
                "Provide plants or cover and separate fry when necessary.",
              ],
              [
                "Guppy fry care",
                "Use suitable small food and protect fry from larger tank mates.",
              ],
            ].map((x) => (
              <div
                className="glass rounded-2xl p-5"
                key={x[0]}
              >
                <h3 className="font-bold text-cyan-200">
                  {x[0]}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {x[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            Gallery
          </p>

          <h2 className="mt-2 text-4xl font-black">
            From farm to aquarium
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {defaultProducts.slice(0, 8).map((p, i) => (
              <img
                key={i}
                src={p.image}
                alt={`SM Guppy Empire ${p.name}`}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-order" className="section">
        <div className="container">
          <h2 className="text-4xl font-black">
            How to order
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["1. Choose Your Fish", "Browse available guppies."],
              ["2. Add to Cart", "Select fish and quantity."],
              ["3. Send on WhatsApp", "Submit your order directly."],
              [
                "4. Confirm Delivery",
                "We confirm availability, payment and delivery details.",
              ],
            ].map((x) => (
              <div
                className="glass rounded-3xl p-6"
                key={x[0]}
              >
                <h3 className="font-black">{x[0]}</h3>

                <p className="mt-2 text-sm text-slate-400">
                  {x[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  const s = load("settings", defaultSettings);

  return (
    <section id="contact" className="section">
      <div className="container glass rounded-[2rem] p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
              Contact
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Let's talk fish.
            </h2>

            <p className="mt-4 text-slate-400">
              Live fish delivery availability depends on location and
              safe transportation. Contact us before payment.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <p className="flex gap-3">
              <MapPin className="text-cyan-300" />
              {s.location}
            </p>

            {s.phone && (
              <p className="flex gap-3">
                <Phone className="text-cyan-300" />
                {s.phone}
              </p>
            )}

            {s.instagram && (
              <p className="flex gap-3">
                <Instagram className="text-cyan-300" />
                Instagram
              </p>
            )}

            <div className="flex flex-wrap gap-2 pt-3">
              <a
                className="btn btn-primary"
                href={`https://wa.me/${WA(s)}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                Chat on WhatsApp
              </a>

              {s.phone && (
                <a
                  className="btn btn-secondary"
                  href={`tel:${s.phone}`}
                >
                  <Phone />
                  Call Now
                </a>
              )}

              {s.maps && (
                <a
                  className="btn btn-secondary"
                  href={s.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin />
                  Google Maps
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col justify-between gap-6 px-4 text-sm text-slate-400 md:flex-row">
        <div>
          <b className="text-white">SM Guppy Empire</b>

          <p className="mt-2">
            Premium Guppies • Healthy Fish • Happy Aquariums
          </p>
        </div>

        <div>
          © 2026 SM Guppy Empire. All Rights Reserved.
        </div>

        <Link className="text-cyan-300" to="/admin">
          Admin
        </Link>
      </div>
    </footer>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home({ cart, setCart }) {
  const products = load("products", defaultProducts);
  const [modal, setModal] = useState(null);

  const add = (p, qty) => {
    setCart((c) => {
      const old = c.find((x) => x.id === p.id);

      if (old) {
        return c.map((x) =>
          x.id === p.id
            ? {
                ...x,
                qty: Math.min(p.stock, x.qty + qty),
              }
            : x
        );
      }

      return [...c, { ...p, qty }];
    });
  };

  return (
    <>
      <Header
        cartCount={cart.reduce((a, x) => a + x.qty, 0)}
      />

      <Hero />

      <section className="section pt-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            Shop by category
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Everything for your aquarium
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((c) => (
              <CategoryCard c={c} key={c[0]} />
            ))}
          </div>
        </div>
      </section>

      <Products
        products={products}
        onAdd={add}
        onOpen={setModal}
      />

      <InfoSections />

      <Contact />

      <Footer />

      <a
        href={`https://wa.me/${WA(
          load("settings", defaultSettings)
        )}?text=${encodeURIComponent(
          "Hello SM Guppy Empire 👋"
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 btn btn-primary shadow-aqua"
      >
        <MessageCircle />

        <span className="hidden sm:inline">
          Order on WhatsApp
        </span>
      </a>

      <ProductModal
        p={modal}
        onClose={() => setModal(null)}
        onAdd={add}
      />
    </>
  );
}

/* =========================================================
   CART
========================================================= */

function Cart({ cart, setCart }) {
  const s = load("settings", defaultSettings);
  const areas = load(
    "deliveryAreas",
    defaultDeliveryAreas
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pin: "",
    notes: "",
  });

  const [delivery, setDelivery] = useState(null);

  const subtotal = cart.reduce(
    (a, x) => a + x.price * x.qty,
    0
  );

  const check = () => {
    const d = areas.find(
      (a) =>
        a.active &&
        a.pinCodes
          .map(String)
          .includes(String(form.pin).trim())
    );

    setDelivery(d || null);
  };

  const charge = delivery
    ? subtotal >=
      Number(
        delivery.freeDeliveryMinimum ||
          s.freeDeliveryMinimum ||
          0
      )
      ? 0
      : Number(delivery.deliveryCharge || 0)
    : 0;

  const total = subtotal + charge;

  const send = () => {
    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.pin
    ) {
      alert(
        "Please complete your name, mobile, address and PIN code."
      );
      return;
    }

    if (!delivery) {
      alert(
        "Please check delivery availability first."
      );
      return;
    }

    const id =
      "SMGE-" +
      Math.floor(1000 + Math.random() * 9000);

    const lines = cart
      .map(
        (x) =>
          `${x.name} × ${x.qty} — ₹${
            x.price * x.qty
          }`
      )
      .join("\n");

    const msg = `SM GUPPY EMPIRE ORDER

Order ID: ${id}

Customer: ${form.name}
Mobile: ${form.phone}

Products:
${lines}

Fish Total: ₹${subtotal}
Delivery Area: ${delivery.areaName}
PIN Code: ${form.pin}
Delivery Charge: ₹${charge}
Total: ₹${total}

Delivery Type: ${delivery.deliveryType}
Estimated Delivery: ${delivery.estimatedDelivery}

Address:
${form.address}

Notes:
${form.notes || "None"}

Please confirm availability and delivery details.`;

    window.open(
      `https://wa.me/${WA(
        s
      )}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <>
      <Header
        cartCount={cart.reduce(
          (a, x) => a + x.qty,
          0
        )}
      />

      <main className="section min-h-screen">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[.2em] text-cyan-300">
                Checkout
              </p>

              <h1 className="text-4xl font-black">
                Your cart
              </h1>
            </div>

            <Link to="/" className="text-cyan-300">
              ← Continue shopping
            </Link>
          </div>

          {!cart.length ? (
            <div className="glass rounded-3xl p-12 text-center">
              <ShoppingCart
                className="mx-auto text-cyan-300"
                size={50}
              />

              <h2 className="mt-4 text-2xl font-bold">
                Your cart is empty
              </h2>

              <Link
                to="/#products"
                className="btn btn-primary mt-5"
              >
                Browse Fish
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
              <div className="grid gap-3">
                {cart.map((x) => (
                  <div
                    className="glass flex gap-4 rounded-2xl p-4"
                    key={x.id}
                  >
                    <img
                      src={x.image}
                      className="h-24 w-24 rounded-xl object-cover"
                      alt={x.name}
                    />

                    <div className="flex-1">
                      <b>{x.name}</b>

                      <p className="text-sm text-slate-400">
                        ₹{x.price} × {x.qty}
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <button
                          className="rounded-lg bg-white/5 p-2"
                          onClick={() =>
                            setCart((c) =>
                              c.map((i) =>
                                i.id === x.id
                                  ? {
                                      ...i,
                                      qty: Math.max(
                                        1,
                                        i.qty - 1
                                      ),
                                    }
                                  : i
                              )
                            )
                          }
                        >
                          <Minus size={14} />
                        </button>

                        <span>{x.qty}</span>

                        <button
                          className="rounded-lg bg-white/5 p-2"
                          onClick={() =>
                            setCart((c) =>
                              c.map((i) =>
                                i.id === x.id
                                  ? {
                                      ...i,
                                      qty: Math.min(
                                        x.stock,
                                        i.qty + 1
                                      ),
                                    }
                                  : i
                              )
                            )
                          }
                        >
                          <Plus size={14} />
                        </button>

                        <button
                          className="ml-3 text-red-300"
                          onClick={() =>
                            setCart((c) =>
                              c.filter(
                                (i) => i.id !== x.id
                              )
                            )
                          }
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-3xl p-6">
                <h2 className="text-xl font-black">
                  Customer & delivery
                </h2>

                <div className="mt-4 grid gap-3">
                  <input
                    className="input"
                    placeholder="Customer name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />

                  <input
                    className="input"
                    placeholder="Mobile number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                  />

                  <input
                    className="input"
                    placeholder="PIN code"
                    value={form.pin}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        pin: e.target.value,
                      })
                    }
                  />

                  <textarea
                    className="input min-h-24"
                    placeholder="Full delivery address"
                    value={form.address}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        address: e.target.value,
                      })
                    }
                  />

                  <textarea
                    className="input min-h-20"
                    placeholder="Optional notes"
                    value={form.notes}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        notes: e.target.value,
                      })
                    }
                  />

                  <button
                    onClick={check}
                    className="btn btn-secondary"
                  >
                    Check Delivery Availability
                  </button>

                  {delivery ? (
                    <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-4 text-sm">
                      <b className="text-green-300">
                        ✓ Delivery Available
                      </b>

                      <p className="mt-2 text-slate-300">
                        {delivery.areaName} • ₹{charge}{" "}
                        delivery •{" "}
                        {delivery.estimatedDelivery}
                      </p>

                      <p className="mt-1 text-slate-500">
                        Minimum order: ₹
                        {delivery.minimumOrder}
                      </p>
                    </div>
                  ) : (
                    form.pin && (
                      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-200">
                        Delivery currently unavailable for
                        this PIN. Contact us on WhatsApp for
                        special arrangements.
                      </div>
                    )
                  )}

                  <div className="rounded-2xl bg-white/5 p-4 text-sm">
                    <b>🐟 Live Fish Delivery</b>

                    <p className="mt-2 text-slate-400">
                      {s.deliveryNotice}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-4 text-sm">
                    <div className="flex justify-between">
                      <span>Fish Total</span>
                      <b>₹{subtotal}</b>
                    </div>

                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <b>₹{charge}</b>
                    </div>

                    <div className="flex justify-between text-lg">
                      <span>Total</span>
                      <b>₹{total}</b>
                    </div>
                  </div>

                  <button
                    onClick={send}
                    className="btn btn-primary w-full"
                  >
                    <MessageCircle />
                    Send Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   DELIVERY ADMIN
========================================================= */

function DeliveryAdmin({
  areas,
  onSave,
  onDelete,
}) {
  const blank = {
    areaName: "",
    district: "",
    state: "Tamil Nadu",
    pinCodes: [],
    available: true,
    deliveryCharge: 100,
    freeDeliveryMinimum: 1500,
    minimumOrder: 500,
    estimatedDelivery: "1–2 Days",
    deliveryType: "Local Delivery",
    notes: "",
    active: true,
  };

  const [draft, setDraft] = useState(blank);
  const [pin, setPin] = useState("");

  const edit = (a) => {
    setDraft({ ...a });
  };

  const submit = (e) => {
    e.preventDefault();

    onSave({
      ...draft,
      pinCodes: Array.isArray(draft.pinCodes)
        ? draft.pinCodes
        : [],
    });

    setDraft(blank);
    setPin("");
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[.8fr_1.2fr]">
      <form
        onSubmit={submit}
        className="glass rounded-3xl p-6"
      >
        <h2 className="text-xl font-black">
          {draft.id ? "Edit" : "Add"} Delivery Area
        </h2>

        <div className="mt-4 grid gap-3">
          {[
            ["areaName", "Area Name"],
            ["district", "District"],
            ["state", "State"],
            ["deliveryCharge", "Delivery Charge"],
            ["minimumOrder", "Minimum Order"],
            [
              "freeDeliveryMinimum",
              "Free Delivery Above",
            ],
            [
              "estimatedDelivery",
              "Estimated Delivery",
            ],
          ].map(([k, l]) => (
            <input
              key={k}
              className="input"
              placeholder={l}
              value={draft[k]}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  [k]: [
                    "deliveryCharge",
                    "minimumOrder",
                    "freeDeliveryMinimum",
                  ].includes(k)
                    ? Number(e.target.value)
                    : e.target.value,
                })
              }
            />
          ))}

          <div className="flex gap-2">
            <input
              className="input"
              placeholder="Add PIN code"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if (pin.trim()) {
                  setDraft({
                    ...draft,
                    pinCodes: [
                      ...(draft.pinCodes || []),
                      pin.trim(),
                    ],
                  });

                  setPin("");
                }
              }}
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {(draft.pinCodes || []).map((p) => (
              <span
                className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs"
                key={p}
              >
                {p}
              </span>
            ))}
          </div>

          <select
            className="input"
            value={draft.deliveryType}
            onChange={(e) =>
              setDraft({
                ...draft,
                deliveryType: e.target.value,
              })
            }
          >
            <option>Local Delivery</option>
            <option>Courier</option>
            <option>Pickup</option>
            <option>Transport</option>
            <option>Other</option>
          </select>

          <textarea
            className="input"
            placeholder="Notes"
            value={draft.notes}
            onChange={(e) =>
              setDraft({
                ...draft,
                notes: e.target.value,
              })
            }
          />

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={draft.active}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  active: e.target.checked,
                  available: e.target.checked,
                })
              }
            />

            Active / Available
          </label>

          <button className="btn btn-primary w-full">
            {draft.id ? "Update" : "Add"} Delivery Area
          </button>
        </div>
      </form>

      <div className="glass rounded-3xl p-6">
        <h2 className="text-xl font-black">
          Delivery Areas
        </h2>

        <div className="mt-4 grid gap-3">
          {areas.map((a) => (
            <div
              className="rounded-2xl border border-white/10 p-4"
              key={a.id}
            >
              <div className="flex justify-between gap-3">
                <div>
                  <b>{a.areaName}</b>

                  <p className="text-sm text-slate-400">
                    {a.district}, {a.state} •{" "}
                    {(a.pinCodes || []).join(", ") ||
                      "No PINs"}
                  </p>

                  <p className="mt-1 text-xs text-cyan-300">
                    ₹{a.deliveryCharge} • Min ₹
                    {a.minimumOrder} •{" "}
                    {a.estimatedDelivery}
                  </p>
                </div>

                <span
                  className={`h-fit rounded-full px-2 py-1 text-xs ${
                    a.active
                      ? "bg-green-400/10 text-green-300"
                      : "bg-red-400/10 text-red-300"
                  }`}
                >
                  {a.active ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="mt-3 flex gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => edit(a)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-secondary text-red-300"
                  onClick={() => onDelete(a.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADMIN
========================================================= */

function Admin() {
  const [logged, setLogged] = useState(
    sessionStorage.getItem("smge-admin") === "1"
  );

  const [tab, setTab] = useState("Dashboard");

  const [products, setProducts] = useState(
    load("products", defaultProducts)
  );

  const [areas, setAreas] = useState(
    load("deliveryAreas", defaultDeliveryAreas)
  );

  const [settings, setSettings] = useState(
    load("settings", defaultSettings)
  );

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  if (!logged) {
    return (
      <div className="grid min-h-screen place-items-center p-4">
        <div className="glass w-full max-w-md rounded-3xl p-8">
          <div className="text-4xl">🐟</div>

          <h1 className="mt-3 text-3xl font-black">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Demo frontend login.
          </p>

          <div className="mt-6 grid gap-3">
            <input
              className="input"
              placeholder="Email / username"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <input
              type="password"
              className="input"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <button
              className="btn btn-primary"
              onClick={() => {
                if (
                  form.name === "admin" &&
                  form.password === "admin123"
                ) {
                  sessionStorage.setItem(
                    "smge-admin",
                    "1"
                  );

                  setLogged(true);
                } else {
                  alert(
                    "Demo login: admin / admin123"
                  );
                }
              }}
            >
              Sign in
            </button>
          </div>

          <Link
            to="/"
            className="mt-5 inline-block text-cyan-300"
          >
            ← Public website
          </Link>
        </div>
      </div>
    );
  }

  const available = products.filter(
    (p) => p.stock > 0
  ).length;

  const sold = products.filter(
    (p) => p.stock <= 0
  ).length;

  const addProduct = () => {
    const p = {
      id: "P" + Date.now(),
      name: "New Guppy",
      category: "Fancy Guppies",
      variety: "New Variety",
      price: 100,
      stock: 1,
      size: "2–3 cm",
      age: "Juvenile",
      breeding: true,
      care: "Easy",
      description: "Edit this product.",
      image: defaultProducts[0].image,
      featured: false,
    };

    const n = [...products, p];

    setProducts(n);
    save("products", n);
  };

  const saveArea = (a) => {
    const n = areas.some((x) => x.id === a.id)
      ? areas.map((x) =>
          x.id === a.id ? a : x
        )
      : [
          ...areas,
          {
            ...a,
            id: "D" + Date.now(),
          },
        ];

    setAreas(n);
    save("deliveryAreas", n);
  };

  const nav = [
    "Dashboard",
    "Products",
    "Delivery Areas",
    "Settings",
  ];

  return (
    <div className="min-h-screen bg-[#020a10]">
      <aside className="fixed hidden h-screen w-64 border-r border-white/10 bg-[#031019] p-5 lg:block">
        <Link
          to="/"
          className="text-xl font-black"
        >
          🐟 SM{" "}
          <span className="text-cyan-300">
            Guppy Empire
          </span>
        </Link>

        <div className="mt-8 grid gap-2">
          {nav.map((n) => (
            <button
              key={n}
              onClick={() => setTab(n)}
              className={`rounded-xl px-4 py-3 text-left ${
                tab === n
                  ? "bg-cyan-300/10 text-cyan-300"
                  : "text-slate-400 hover:bg-white/5"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            sessionStorage.removeItem(
              "smge-admin"
            );
            setLogged(false);
          }}
          className="absolute bottom-5 left-5 flex items-center gap-2 text-red-300"
        >
          <LogOut size={17} />
          Logout
        </button>
      </aside>

      <main className="p-4 md:p-8 lg:ml-64">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[.2em] text-cyan-300">
              Admin dashboard
            </p>

            <h1 className="text-3xl font-black">
              {tab}
            </h1>
          </div>

          <Link
            to="/"
            className="btn btn-secondary"
          >
            View Store
          </Link>
        </div>

        <div className="mb-5 flex gap-2 overflow-auto lg:hidden">
          {nav.map((n) => (
            <button
              className={`btn ${
                tab === n
                  ? "btn-primary"
                  : "btn-secondary"
              }`}
              key={n}
              onClick={() => setTab(n)}
            >
              {n}
            </button>
          ))}
        </div>

        {tab === "Dashboard" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Total Products", products.length],
              ["Available", available],
              ["Sold Out", sold],
              [
                "Active Delivery Areas",
                areas.filter((a) => a.active)
                  .length,
              ],
            ].map((x) => (
              <div
                className="glass rounded-2xl p-5"
                key={x[0]}
              >
                <p className="text-sm text-slate-400">
                  {x[0]}
                </p>

                <b className="mt-2 block text-3xl">
                  {x[1]}
                </b>
              </div>
            ))}
          </div>
        )}

        {tab === "Products" && (
          <div className="glass rounded-3xl p-5">
            <div className="mb-5 flex justify-between">
              <h2 className="text-xl font-black">
                Manage Products
              </h2>

              <button
                onClick={addProduct}
                className="btn btn-primary"
              >
                <Plus />
                Add Product
              </button>
            </div>

            <div className="grid gap-3">
              {products.map((p) => (
                <div
                  className="grid gap-3 rounded-2xl border border-white/10 p-4 md:grid-cols-[80px_1fr_120px_100px_100px] md:items-center"
                  key={p.id}
                >
                  <img
                    src={p.image}
                    className="h-16 w-20 rounded-xl object-cover"
                    alt={p.name}
                  />

                  <div>
                    <b>{p.name}</b>

                    <p className="text-xs text-slate-500">
                      {p.category} • {p.id}
                    </p>
                  </div>

                  <input
                    className="input"
                    type="number"
                    value={p.price}
                    onChange={(e) => {
                      const n = products.map(
                        (x) =>
                          x.id === p.id
                            ? {
                                ...x,
                                price: Number(
                                  e.target.value
                                ),
                              }
                            : x
                      );

                      setProducts(n);
                      save("products", n);
                    }}
                  />

                  <input
                    className="input"
                    type="number"
                    value={p.stock}
                    onChange={(e) => {
                      const n = products.map(
                        (x) =>
                          x.id === p.id
                            ? {
                                ...x,
                                stock: Number(
                                  e.target.value
                                ),
                              }
                            : x
                      );

                      setProducts(n);
                      save("products", n);
                    }}
                  />

                  <button
                    onClick={() => {
                      const n = products.filter(
                        (x) => x.id !== p.id
                      );

                      setProducts(n);
                      save("products", n);
                    }}
                    className="btn btn-secondary text-red-300"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "Delivery Areas" && (
          <DeliveryAdmin
            areas={areas}
            onSave={saveArea}
            onDelete={(id) => {
              const n = areas.filter(
                (x) => x.id !== id
              );

              setAreas(n);
              save("deliveryAreas", n);
            }}
          />
        )}

        {tab === "Settings" && (
          <div className="glass max-w-3xl rounded-3xl p-6">
            <div className="grid gap-4">
              {Object.entries(settings).map(
                ([k, v]) => (
                  <label
                    key={k}
                    className="text-sm"
                  >
                    <span className="mb-1 block text-slate-400">
                      {k}
                    </span>

                    <input
                      className="input"
                      value={v}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          [k]: e.target.value,
                        })
                      }
                    />
                  </label>
                )
              )}

              <button
                className="btn btn-primary"
                onClick={() =>
                  save("settings", settings)
                }
              >
                Save Business Settings
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  const [cart, setCart] = useState(
    load("cart", [])
  );

  React.useEffect(() => {
    save("cart", cart);
  }, [cart]);

  return (
    <Routes>
      <Route
        path="/admin"
        element={<Admin />}
      />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            setCart={setCart}
          />
        }
      />

      <Route
        path="*"
        element={
          <Home
            cart={cart}
            setCart={setCart}
          />
        }
      />
    </Routes>
  );
}

export default App;