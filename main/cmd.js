
/**
 * @typedef {Object} CommandOptions
 * @prop {string} name
 * @prop {string[]?} aliases
 * @prop {boolean} nsfw
 */

let Command = class {
    constructor(){}
}

Command.store = {}

Command.add = function($opts){}

Command.find = function($name){
    return Object.values(this.store)
        .find(($cmd) => $cmd.name == $name || $cmd.aliases && $cmd.aliases.includes($name))
}