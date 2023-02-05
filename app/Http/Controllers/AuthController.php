<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function getAuthUser(Request $request)
    {

        return response()->json([
            'user' => auth()->user()
        ]);

    }

}
