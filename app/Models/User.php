<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use SoftDeletes,
        HasFactory, 
        Notifiable, 
        HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function isSuperAdmin()
    {

        return $this->id == 1;

    }

    public function isAdmin()
    {

        return $this->id == 1;

    }

    public function modelQuery()
    {

        $user = $this->newQuery();

        return $user;

    }

    public function createModel($request)
    {

        return $this->create($request->only([
            'name',
            'email',
        ]) + [
            'password' => Hash::make($request->password)
        ]);

    }

    public function updateModel($request)
    {

        $this->update($request->only(['name', 'email']));

        return $this;

    }

    public function updatePasswordModel($request)
    {

        $this->update([
            'password' => Hash::make($request->new_password)
        ]);

        return $this;

    }

}
