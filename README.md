Bootstrap Trigger Button Labels
===============================

Adds in ability to set expand and contract label values for collapse triggering buttons in Bootstrap. This means when showing and hiding something (like a panel of content within a panel group) you can choose what the collapsed and non-collapsed text values of the link

## Installation

Simply include the simple script in this repo after the main core Bootstrap include, which is most of the time: bootstrap.min.js - and BAM! that's it. You've got dynamic changing text labels for your buttons.

## Example in use

<button type="button" class="collapsed" data-toggle="collapse" data-target="#forward-qr-inner" data-label-expanded="Hide Shown Content" data-label-contracted="Show Hidden Content">Show Hidden Content</button>

<div id="someexpandingcontent" class="collapse"><p>This content will only be displayed when the button is clicked toggling it.</p></div>