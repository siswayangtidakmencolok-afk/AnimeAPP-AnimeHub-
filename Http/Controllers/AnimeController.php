<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Illuminate\Http\Request;

class AnimeController extends Controller
{
    public function index()
    {
        return Anime::all();
    }

    public function store(Request $request)
    {
        $anime = Anime::create($request->all());
        return response()->json($anime, 201);
    }

    public function show($id)
    {
        return Anime::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $anime = Anime::findOrFail($id);
        $anime->update($request->all());
        return $anime;
    }

    public function destroy($id)
    {
        Anime::destroy($id);
        return response()->json(['message' => 'deleted']);
    }
}
