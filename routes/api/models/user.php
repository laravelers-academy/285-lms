<?php

use Illuminate\Support\Facades\Route;

Route::post('index', 'UserController@index')->name('index');

Route::post('show', 'UserController@show')->name('show');

Route::post('create', 'UserController@create')->name('create');

Route::put('update', 'UserController@update')->name('update');

Route::put('update/password', 'UserController@updatePassword')->name('update.password');