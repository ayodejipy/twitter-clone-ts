module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
		colors: {
			twitter: {
				bg: '#15202B',
				button: '#7856ff',
				gray: '#d9d9d9',
			}
		}
	},
  },
  plugins: [],
}
