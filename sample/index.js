import kmdrpc from './src/kmdrpc'
import control, { connect, stop } from './src/control'
import wallet from './src/wallet'
import util from './src/util'
import rawtransactions from './src/rawtransactions'
import faucet from './src/faucet'
import generating from './src/generating'

const rpcuser = 'use.env.file.maybe'
const rpcpassword = 'some.password'
const rpcport = '8096'
// get the connection object configured and ready
// default komodod port
const rpcuser = "diesmaster";
const password = "IloveDiesmaster";
const rpc = connect("http://127.0.0.1:8096", rpcuser,password)

// // pass the configured rpc connection and fire it off
 /*control.getinfo(rpc).then(resp => {
     console.log(resp)
 }).catch(function (error){
     console.log(error)
 });
*/

/*control.help(rpc, "sendtoaddress").then(resp => {
    console.log(resp)
}).catch(function (error){
    console.log(error)
});*/

 /*wallet.sendtoaddress(rpc, "RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ", 0 ).then(res => {
   //console.log(res);
 }).catch(function (error){
   console.log(error);
 });
*/

 /*wallet.z_sendmany(rpc,"RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ" ,[{"address": "RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ", "amount": 0}] ).then( res => {
   console.log(res);
 }).catch(function(error){
   console.log(error);
 });*/

 /*wallet.getnewaddress(rpc).then( res => {
   console.log(res);
 }).catch(function(error){
   console.log(error);
 });*/

 /*util.validateaddress(rpc, "RBtNBJjWKVKPFG4To5Yce9TWWmc2AenzfZ").then( res => {
   console.log(res);
 }).catch(function(error){
   console.log(error);
 });*/


 /*

 wallet.sendtoaddress(rpc) etc.

 */

// wallet.listaccounts(rpc).then(resp => {
//     console.log(resp)
// }).catch(function (error){
//     console.log(error)
// })

//faucet.faucetinfo(rpc).then(resp => {
//    console.log(resp)
//}).catch(function (error){
//    console.log(error)
//})

//generating.generate(rpc,5).then(resp => {
//    console.log(resp)
//}).catch(error => {
//    console.log(error)
//})

// faucet.faucetaddress(rpc, '03F6B7FCAF0B8B8EC432D0DE839A76598B78418DADD50C8E5594C0E557D914EC09').then(resp => {
//     console.log(resp)
// }).catch(function (error){
//     console.log(error)
// })

// rawtransactions.decodescript(rpc).then(resp =>{
//     console.log(resp)
// }).catch(error => {
//     console.log(error)
// })



// control.stop(rpc).then(displayResponse)
// TEST KEY
// pub: RWPg8B91kfK5UtUN7z6s6TeV9cHSGtVY8D
// priv: UqMgxk7ySPNQ4r9nKAFPjkXy6r5t898yhuNCjSZJLg3RAM4WW1m9
//######################################################################
// ab.importprivkey("UqMgxk7ySPNQ4r9nKAFPjkXy6r5t898yhuNCjSZJLg3RAM4WW1m9","",false)
// ab.generate(20)
// ab.getwalletinfo()
// ab.faucetinfo()
// ab.validateaddress("RWPg8B91kfK5UtUN7z6s6TeV9cHSGtVY8D")
// ab.dumpprivkey("RWPg8B91kfK5UtUN7z6s6TeV9cHSGtVY8D")
// ab.stop()
// ab.getnewaddress()
// ab.getbalance()
// ab.faucetfund("7")
// let cd = ab.faucetfund("7")
// console.log(cd)
// ab.decoderawtransaction(cd.hex)
// console.log(ab.getinfo())
