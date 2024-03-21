# Uniconvey
## Introduction
Uniconvey is a factory tycoon game, where you build your own factory with provided tiles.
During the game, you will unlock new tiles, upgrades and materials, growing your factory and crafting more items.

## Tiles
Your factory will consist of various tiles, placed on the board manually.
All of these tiles have their own unique functions and uses, allowing you to automate the process however you like.
### Conveyor Belts 
#### Direction-Piece (L, R, U, D)
Moves your materials, tools and other items along the given directional conveyor belt.
Conveyor belts can be linked to generators and transformers to handle their input and output.
#### Cross-Piece
Allows your conveyor belts to cross / overlap, not interrupting the flow of the content.

### Utility
#### Splitter
Takes the content through one input port and evenly divides it, consistently transporting the same content through two output ports.
#### Sorter
Similarily to the Splitter, the Sorter takes the content through one input port and filters one specified type of content through one output port,
while the rest moves along through another output port.
#### Timer
Takes the content through one input port and stores it, outputting it again at a steady rate through one output port.
#### Portal
Consists of two distinct pieces, one input port and one output port.
These two pieces do not have to be connected physically, but still transport content effectively from one point to another.

### Generators
#### Lumber Station
Generates wood. Upgrades consistently provide more wood. 
#### Mine
Generates stone. Upgrades consistenly provide more stone, as well as increasing the chance of rare materials.

### Transformers
#### Crafter
Takes two types of material through two input ports. If the materials provided align with the given recipe, the crafter combines the materials
into a new item, following the recipe. If the material provided doesn't align, crafting will be halted and the faulty material will promptly be deleted.
#### Furnace 
Smelts / Cooks the provided content and returns a specific output.
#### Enhancer
Takes and returns raw materials only. These materials become enhanced.
Enhanced materials cannot be crafted with, but have increased value.

### Extras
#### Market
Only has input ports on all four sides. Sells the given content for a fixed price.
