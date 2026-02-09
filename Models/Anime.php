<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    protected $fillable = [
        'title',
        'studio',
        'episodes',
        'genre',
        'rating',
        'synopsis'
    ];
}
