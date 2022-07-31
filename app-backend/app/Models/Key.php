<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vehicle;

class Key extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function vehicles()
    {
        return $this->belongsToMany(Vehicle::class);
    }
}
