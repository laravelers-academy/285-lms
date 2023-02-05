<?php

use Illuminate\Support\Facades\Route;

Route::as('api.')->group(base_path('/routes/api/models.php'));

Route::as('api.')->group(base_path('/routes/api/system.php'));