<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Resources\Models\UserResource;
use App\Classes\Search\SearchBuilder;
use App\Http\Requests\Models\User\IndexRequest;
use App\Http\Requests\Models\User\ShowRequest;
use App\Http\Requests\Models\User\CreateRequest;
use App\Http\Requests\Models\User\UpdateRequest;
use App\Http\Requests\Models\User\UpdatePasswordRequest;

class UserController extends Controller
{
    
    public function __construct()
    {

        $this->middleware('auth:sanctum');

    }

    public function index(IndexRequest $request)
    {

        $builder = new SearchBuilder('User', $request);

        $query = $builder->filter();

        return UserResource::collection($query->get());

    }

    public function show(ShowRequest $request)
    {

        return new UserResource(User::find($request->user_id));

    }

    public function create(CreateRequest $request)
    {

        $user = new User;

        $user = $user->createModel($request);

        return new UserResource($user);

    }

    public function update(UpdateRequest $request)
    {

        $user = User::findOrFail($request->user_id);

        $user = $user->updateModel($request);

        return new UserResource($user);

    }

    public function updatePassword(UpdatePasswordRequest $request)
    {

        $user = User::findOrFail($request->user_id);

        $user->updatePasswordModel($request);

        return new UserResource($user);

    }

}
