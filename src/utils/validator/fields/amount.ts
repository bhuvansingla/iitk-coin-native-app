function validate(amount: number, avialableCoins: number): boolean {
	return amount <= avialableCoins && amount > 0;
}

export default validate;
