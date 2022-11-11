const {expect} = require("chai")
const {BN, expectEvent, expectRevert} = require("@openzeppelin/test-helpers")

const Box = artifacts.require("Box")

contract("Box", ([owner, other]) => {
    const value = new BN('69')
    beforeEach(async () => {
        this.box = await Box.new({from: owner})
    })

    it('retrieve returns previously stored value', async () => {
        await this.box.store(value, {from: owner})
        expect(await this.box.retrieve()).to.be.bignumber.equal(value)
    })

    it('store emit an event', async () => {
        const receipt = await this.box.store(value, {from: owner})
        expectEvent(receipt, 'ValueChanged', {value: value})
    })

    it('non owner can\'t store a value', async () => {
        await expectRevert(this.box.store(value, {from:other}), 'Ownable: caller is not the owner')
    })
})