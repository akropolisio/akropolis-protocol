'use strict'

const AkropolisToken = artifacts.require('./AkropolisToken.sol')

const BigNumber = web3.BigNumber;

const should = require('chai')
	.use(require('chai-as-promised'))
	.use(require('chai-bignumber')(BigNumber))
	.should()

contract('Akropolis Token', function ([owner, holder]) {

	let token;

	beforeEach(async function () {
		token = await AkropolisToken.new()
	});


	it('should have the correct setup', async function () {
		(await token.name()).should.be.equal("Akropolis Token");
		(await token.decimals()).should.be.bignumber.equal(18);
		(await token.symbol()).should.be.equal("AKR");
		(await token.version()).should.be.equal("AKR 1.0");
	});


	it('should allow minting', async function () {
		await token.mint(holder, 100, {from: owner});

		(await token.balanceOf(holder)).should.be.bignumber.equal(100);
	});

});