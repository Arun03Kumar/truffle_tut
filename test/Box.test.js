const {expect} = require('chai')

const Box = artifacts.require("Box")

contract('Box', () => {
    beforeEach(async () => {
        this.box = await Box.new()
    })

    it('retrrieve returns  a value stored before', async () => {
        await this.box.store(42)
        expect((await this.box.retrieve()).toString()).to.equal('42')
    })
})