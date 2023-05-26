package com.example.demo.controller;

import com.example.demo.model.Note;
import com.example.demo.repository.NoteRepository;
import com.example.demo.util.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
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
    public ResponseEntity<Note> getNoteById(@PathVariable(value = "id") long id)
            throws ResourceNotFoundException {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Id not found for this id :: " + id));
        return ResponseEntity.ok().body(note);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteNote(@PathVariable(value = "id") long id) {
        try {
            //Xoa du lieu
            noteRepository.deleteById(id);

            //check du lieu da duoc xoa chua
            Note note = noteRepository.findById(id).orElse(null);

            boolean checkDelete = note == null;

            // Return a response with status 201 and the saved vehicle
            return ResponseEntity.status(HttpStatus.OK).body(checkDelete);
        } catch (Exception e) {
            // If an error occurs, return a response with status 400 and an error message
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }

    @PostMapping()
    public ResponseEntity<Note> addNote(@RequestBody Note note) {
        try {
            // Return a response with status 201 and the saved vehicle
            // Convert the current date to dd/MM/yyyy format
            Date date = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
            String strDate = formatter.format(date);
            note.setCreateDate(strDate);

            // Return a response with status 201 and the saved vehicle
            return ResponseEntity.status(HttpStatus.CREATED).body(noteRepository.save(note));
        } catch (Exception e) {
            // If an error occurs, return a response with status 400 and an error message
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping()
    public ResponseEntity<String> updateNoteStatus(@RequestBody Note note) {
        try {
            Date date = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
            String strDate = formatter.format(date);

            Note noteDetail = noteRepository.findById(note.getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Id not found for this id :: " + note.getId()));
            noteDetail.setCategory(note.getCategory());
            noteDetail.setContext(note.getContext());
            noteDetail.setCreateDate(strDate);

            noteRepository.save(noteDetail);
            return new ResponseEntity<>("Update Done", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
