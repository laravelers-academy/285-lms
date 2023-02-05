<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function before($user, $ability) 
    {

        if($user->isAdmin()) {

            return true;

        }

    }

    public function index(User $user)
    {

        return false;

    }

    public function view(User $user, User $model)
    {

        return true;

    }

    public function create(User $user)
    {

        return false;

    }

    public function update(User $user, User $model)
    {

        return false;

    }

    public function updatePassword(User $user, User $model)
    {

        return false;

    }
    
}
