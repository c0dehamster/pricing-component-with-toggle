const toggleSwitch = document.querySelector(".header__switch")
const priceDisplayFields = document.querySelectorAll(".card__value")

const monthlyPrices = new Map([
	["basic", 19.99],
	["professional", 24.99],
	["master", 39.99],
])

const annualPrices = new Map([
	["basic", 199.99],
	["professional", 249.99],
	["master", 399.99],
])

toggleSwitch.addEventListener("click", e => {
	const prices = e.target.checked ? monthlyPrices : annualPrices
	priceDisplayFields.forEach(p => {
		p.textContent = prices.get(p.id)
	})
})
