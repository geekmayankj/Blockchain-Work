const Mjcoin = artifacts.require("Mjcoin")

contract("Mjcoin",(accounts)=>{


   // console.log(accounts)
   before(async() => {
    mjc = await Mjcoin.deployed()
   })
   it("give owner 1M token", async() => {
    let balance = await mjc.balanceOf(accounts[0])  
    balance =  web3.utils.fromWei(balance,'ether')
   // console.log(web3.utils.fromWei(balance,'ether'))
   assert.equal(balance,'100000','balance should be 100k')
    })

    it("can transfer tokens", async() => {
        let amount = web3.utils.toWei('100')
        await mjc.transfer(accounts[1],amount,{from: accounts[0]})
        let balance = await mjc.balanceOf(accounts[1])  
        balance =  web3.utils.fromWei(balance,'ether') 
        assert.equal(balance,'100','balance should be 100')   

    })
})