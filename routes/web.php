<?php

use Illuminate\Support\Facades\Route;

Route::get('get-auth-user', 'AuthController@getAuthUser')->name('get.auth.user');

Route::get('password-reset/{token}', 'AppController@app')->name('password.reset');

Route::get('{any?}', 'AppController@app')->where('any', '^(?!api).*$')->name('app');

