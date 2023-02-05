<?php

use Illuminate\Support\Facades\Route;

Route::as('user.')->prefix('user')->group(base_path('routes/api/models/user.php'));