<?php

Route::get('/', function () {
    return view('phonebook');
});

// REMEMBER: those routs are created by VUE; that is unknown to LARAVEL; SO it makes trouble if the page is refreshed; it throws error
// SOLUTION

Route::get('/{name}', function (){
    return redirect('/');
})->where('name', '[A-Za-z]+');