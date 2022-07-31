<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Key;

class Vehicle extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function keys()
    {
        return $this->belongsToMany(Key::class);
    }
}
