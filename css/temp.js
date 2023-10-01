(dateBetween(start(prop("Date")), end(prop("Date")), "minutes") == 0) ? "-" : 
((dateBetween(start(prop("Date")), end(prop("Date")), "minutes") % 60) !== 0 ? (format(-dateBetween(start(prop("Date")), end(prop("Date")), "hours")) + "hrs ") + (format(-dateBetween(start(prop("Date")), end(prop("Date")), "minutes")) + "mins") : 
((dateBetween(start(prop("Date")), end(prop("Date")), "minutes") < -59) ? (format(-dateBetween(start(prop("Date")), end(prop("Date")), "hours")) + "hrs") : 
(format(-dateBetween(start(prop("Date")), end(prop("Date")), "minutes")) + "mins")))