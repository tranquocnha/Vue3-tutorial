package com.example.demo.controller;

import com.example.demo.model.Note;
import com.example.demo.repository.NoteRepository;
import com.example.demo.util.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/note")
public class NoteController {
    @Autowired
    private NoteRepository noteRepository;

    @GetMapping("/get-all")
    public List<Note> noteGetAll() {
        return noteRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getVehiclesById(@PathVariable(value = "id") long id)
            throws ResourceNotFoundException {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Id not found for this id :: " + id));
        return ResponseEntity.ok().body(note);
    }

    @PostMapping()
    public ResponseEntity<Note> addVehicles(@RequestBody Note note) {
        try {
            // Return a response with status 201 and the saved vehicle
            note.setCreateDate(String.valueOf(new Date()));
            return ResponseEntity.status(HttpStatus.CREATED).body(noteRepository.save(note));
        } catch (Exception e) {
            // If an error occurs, return a response with status 400 and an error message
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping()
    public ResponseEntity<String> updateVehiclesHourStatus(@RequestBody Note note) {
        try {
            Note noteDetail = noteRepository.findById(note.getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Id not found for this id :: " + note.getId()));
            noteDetail.setCategory(note.getCategory());
            noteDetail.setContext(note.getContext());
            noteDetail.setCreateDate(String.valueOf(new Date()));

            noteRepository.save(noteDetail);
            return new ResponseEntity<>("Update Done", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
